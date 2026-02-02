# GOxT CRM - Resumen Ejecutivo Completo

## 📋 ¿Qué es GOxT CRM?

**GOxT CRM** es un sistema de gestión de relaciones con clientes (Customer Relationship Management) diseñado específicamente como un **CRM de ventas B2B** con un enfoque especial en la **industria del transporte y logística** (terrestre y marítimo). Sin embargo, su arquitectura flexible basada en **productos y catálogos personalizables** lo hace adaptable a **cualquier empresa o negocio** que requiera gestionar oportunidades comerciales, cotizaciones y seguimiento de clientes.

---

## 🎯 Propósito Principal

El CRM tiene como objetivos principales:

1. **Gestionar el ciclo de ventas completo**: Desde la captación del lead hasta el cierre de la oportunidad
2. **Centralizar información de contactos y organizaciones**: Con sus relaciones y detalles personalizables
3. **Automatizar la creación de cotizaciones**: Con productos configurables y campos dinámicos
4. **Integrar con sistemas operativos**: Como CamionGO/Cargo para sincronización de datos
5. **Visualizar métricas de negocio**: A través de dashboards con Metabase

---

## 🏗️ Arquitectura de Entidades y Relaciones

### 1. **Contactos (Persons)**
Los contactos representan las personas individuales con las que se interactúa comercialmente.

**Campos principales:**
- `name`: Nombre del contacto (obligatorio)
- `document_number`: Número de documento
- `internal_position`: Cargo interno en la organización
- `organization_id`: Relación con organización

**Campos dinámicos (labels personalizables):**
- `email`: Múltiples correos con tipos (Trabajo, Personal, etc.)
- `phone`: Múltiples teléfonos con tipos
- `charge`: Cargo desde catálogo (Gerente, Jefe de Operaciones, etc.)
- `tag`: Etiquetas múltiples para clasificación

### 2. **Organizaciones (Organizations)**
Representan empresas o entidades cliente.

**Campos principales:**
- `name`: Nombre de la organización (obligatorio)
- `document_number`: RUT/NIT/RUC de la empresa
- `workspace_id`: Workspace al que pertenece

**Campos dinámicos:**
- `email`: Correos de la organización
- `phone`: Teléfonos corporativos
- `address`: Direcciones múltiples

### 3. **Relación Contacto ↔ Organización**

```
┌─────────────────┐         1:N         ┌───────────────────┐
│   Organization  │◄────────────────────│     Person        │
│                 │                     │                   │
│ • name          │                     │ • name            │
│ • document_num  │                     │ • organization_id │
│ • emails[]      │                     │ • charge          │
│ • phones[]      │                     │ • internal_pos    │
│ • addresses[]   │                     │ • emails[]        │
└─────────────────┘                     └───────────────────┘
```

**Comportamiento automático:**
- Al seleccionar un contacto en una oportunidad, **se autocompleta la organización** si el contacto tiene una asociada
- Al seleccionar una organización, **se busca automáticamente un contacto asociado**

---

## 📊 Flujos y Oportunidades (Sales Pipeline)

### **Flujos (Flows)**
Son pipelines de ventas personalizables por cada workspace.

```typescript
interface Flow {
    id: number;
    name: string;           // "Ventas Terrestre", "Marítimo", etc.
    is_active: boolean;
    is_default: boolean;
    flow_stage: FlowStage[]; // Etapas del flujo
}

interface FlowStage {
    id: number;
    name: string;           // "Prospección", "Negociación", "Cierre"
    order_number: number;   // Orden en el pipeline
}
```

### **Oportunidades (Opportunities)**
Representan cada negocio potencial dentro de un flujo.

```typescript
interface Opportunity {
    id: number;
    name: string;                    // Nombre del negocio
    flow_id: number;                 // Flujo al que pertenece
    flow_stage_id: number;           // Etapa actual
    person_id: number;               // Contacto principal
    organization_id: number;         // Organización cliente
    net_cost: number | null;         // Ingreso estimado
    is_won: boolean;                 // ¿Ganada?
    is_lost: boolean;                // ¿Perdida?
    planned_clousure_date: string;   // Fecha prevista de cierre
    
    // Relaciones
    opportunity_product: OpportunityProduct[];       // Productos asociados
    opportunity_quotation: OpportunityQuotation[];   // Cotizaciones
    opportunity_activity: OpportunityActivity[];     // Actividades
    opportunity_responsible: User[];                 // Responsables múltiples
}
```

**Visualización Kanban:**
Las oportunidades se visualizan en un tablero Kanban donde se pueden arrastrar entre etapas.

```
┌──────────────┐   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│ Prospección  │   │ Cotización   │   │ Negociación  │   │   Cierre     │
├──────────────┤   ├──────────────┤   ├──────────────┤   ├──────────────┤
│ ┌──────────┐ │   │ ┌──────────┐ │   │              │   │ ┌──────────┐ │
│ │ Oport. 1 │ │   │ │ Oport. 2 │ │   │              │   │ │ Oport. 5 │ │
│ └──────────┘ │   │ └──────────┘ │   │              │   │ └──────────┘ │
│ ┌──────────┐ │   │              │   │              │   │              │
│ │ Oport. 3 │ │   │              │   │              │   │              │
│ └──────────┘ │   │              │   │              │   │              │
└──────────────┘   └──────────────┘   └──────────────┘   └──────────────┘
```

---

## 📦 Productos Personalizados (Custom Products)

El sistema de productos es **altamente configurable** y es el corazón de la flexibilidad del CRM.

### Estructura de Productos

```typescript
interface Product {
    id: number;
    name: string;               // "Flete Terrestre", "Contenedor 40ft"
    product_label: ProductLabel[];
}

interface ProductLabel {
    id: number;
    name: string;        // "Origen", "Destino", "Tipo de Carga"
    key: string;         // Identificador único
    type: string;        // "select", "input", "cargo_address", etc.
    product_label_option: ProductLabelOption[];
}

interface ProductLabelOption {
    id: number;
    value: string;       // "Santiago", "Valparaíso", "Buenos Aires"
    order_number: number;
}
```

### Tipos de Campos Soportados:

| Tipo | Descripción | Fuente de Datos |
|------|-------------|-----------------|
| `input` | Campo de texto libre | Manual |
| `number` | Campo numérico | Manual |
| `select` | Selector de opciones | Opciones configuradas |
| `date` | Selector de fecha | Calendario |
| `cargo_vessel` | Vessels de Cargo | Integración Cargo |
| `cargo_address` | Direcciones de Cargo | Integración Cargo |
| `cargo_route` | Rutas de Cargo | Integración Cargo |
| `cargo_geofence` | Geocercas de Cargo | Integración Cargo |

**Ejemplo de Producto "Flete Marítimo":**
```
Producto: Flete Marítimo
├── Etiqueta: Origen (tipo: cargo_address)
├── Etiqueta: Destino (tipo: cargo_address)  
├── Etiqueta: Nave (tipo: cargo_vessel)
├── Etiqueta: Tipo de Contenedor (tipo: select)
│   └── Opciones: 20ft, 40ft, 40ft HC, Reefer
├── Etiqueta: Peso (tipo: number)
└── Etiqueta: Notas (tipo: input)
```

---

## 📝 Sistema de Cotizaciones (Quotations)

Las cotizaciones son documentos comerciales dinámicos generados a partir de productos.

### Flujo de Cotización

```
┌─────────────────────────────────────────────────────────────────┐
│                    CREAR COTIZACIÓN                             │
├─────────────────────────────────────────────────────────────────┤
│ 1. Seleccionar Producto         → Carga etiquetas dinámicas     │
│ 2. Completar campos del producto → Origen, Destino, etc.        │
│ 3. Agregar múltiples servicios   → Líneas de la cotización      │
│ 4. Configurar montos y moneda    → USD, CLP, etc.               │
│ 5. Establecer términos           → Condiciones comerciales      │
│ 6. Definir validez               → Fecha de vencimiento         │
└─────────────────────────────────────────────────────────────────┘
```

### Estructura de Cotización

```typescript
interface OpportunityQuotation {
    id: number;
    opportunity_id: number;
    product_id: number;
    name: string;                    // "Cotización Flete - Octubre 2025"
    description: string;
    amount: number;                  // Monto total
    currency_id: number;             // Moneda
    status: 'draft' | 'sent' | 'accepted' | 'rejected';
    valid_until: string;             // Validez de la cotización
    quotation_fields: QuotationField[]; // Campos dinámicos
}

interface QuotationField {
    field_key: string;      // "origen", "destino"
    field_value: string;    // "Santiago", "Valparaíso"
    service_index: number;  // Para múltiples servicios
}
```

### Estados de Cotización

```
  ┌─────────┐    Enviar    ┌────────┐
  │  Draft  │─────────────►│  Sent  │
  └─────────┘              └────────┘
                               │
              ┌────────────────┼────────────────┐
              ▼                                 ▼
       ┌──────────┐                      ┌──────────┐
       │ Accepted │                      │ Rejected │
       │  (won)   │                      │  (lost)  │
       └──────────┘                      └──────────┘
```

---

## 📅 Actividades (Activities)

Las actividades son tareas o eventos asociados a oportunidades.

```typescript
interface OpportunityActivity {
    id: number;
    opportunity_id: number;
    user_id: number;           // Responsable
    title: string;
    type: string;              // Llamada, Reunión, Email, Tarea
    priority: string;          // Alta, Media, Baja
    date_from: string;
    date_to: string;
    description: string;
}
```

### Tipos de Actividades (Configurables desde Catálogo):
- 📞 Llamada
- 📧 Email
- 📅 Reunión
- ✅ Tarea
- 🚗 Visita
- (Personalizables por cada workspace)

### Integración con Google Calendar:
Las actividades pueden sincronizarse con Google Calendar, creando eventos automáticamente.

---

## 🏷️ Sistema de Catálogos (Labels)

Los catálogos permiten gestionar listas de opciones reutilizables en todo el sistema.

### Catálogos por Entidad:

| Entidad | Catálogos Disponibles |
|---------|----------------------|
| Person | email_type, phone_type, charge, tag |
| Organization | email_type, phone_type, address_type |
| Opportunity | tag_opportunity, priority |
| Activity | activity_type |

### Gestión de Opciones:
- ✅ Crear nuevas opciones
- ✏️ Editar opciones existentes
- ❌ Eliminar opciones (si no tienen registros asociados)
- ↕️ Reordenar mediante drag & drop

---

## 🔌 Integraciones

### 1. **Cargo (CamionGO)**
Integración bidireccional con el sistema operativo de transporte.

**Datos obtenidos de Cargo:**
- Vessels (naves)
- Direcciones
- Rutas
- Geocercas

**Datos enviados a Cargo:**
- Contactos (como clientes)
- Cotizaciones (como órdenes)

### 2. **Google Calendar**
Sincronización de actividades con el calendario de Google.

### 3. **Metabase**
Dashboards embebidos para análisis de datos y métricas.

---

## 🎯 ¿Para Quién Está Dirigido?

### Público Principal:
1. **Empresas de Transporte Terrestre**: Flota de camiones, última milla
2. **Empresas de Transporte Marítimo**: Forwarding, agentes de carga
3. **Operadores Logísticos**: 3PL, almacenamiento

### Aplicabilidad General:
Gracias al sistema de productos personalizables, el CRM puede adaptarse a:
- 🏗️ Empresas de construcción
- 🏭 Manufactura
- 📦 Distribución
- 🛠️ Servicios profesionales
- Cualquier negocio B2B con ciclo de ventas

---

## 💡 ¿Por Qué es Importante / Diferenciadores?

### 1. **Productos 100% Configurables**
A diferencia de CRMs genéricos, GOxT permite definir productos con campos dinámicos que se adaptan exactamente al negocio.

### 2. **Cotizaciones Dinámicas**
Las cotizaciones heredan la estructura del producto y permiten múltiples líneas de servicio, haciendo el proceso de cotización extremadamente rápido.

### 3. **Integración Nativa con Sistemas Operativos**
La integración con Cargo permite que la información fluya desde el CRM hacia la operación sin duplicar trabajo.

### 4. **Multi-Workspace**
Cada empresa/cliente tiene su propio workspace aislado con configuración independiente.

### 5. **Pipeline Visual**
El tablero Kanban permite visualizar todo el embudo de ventas de un vistazo.

### 6. **Sistema de Etiquetas Flexible**
Los catálogos personalizables permiten adaptar el sistema a la terminología y procesos de cada empresa.

---

## 📊 Comparación con Otras Herramientas

| Característica | GOxT CRM | HubSpot | Pipedrive | Salesforce |
|----------------|----------|---------|-----------|------------|
| Productos Dinámicos | ✅ Nativo | ❌ | ⚠️ Limitado | ⚠️ Desarrollo |
| Cotizaciones desde Productos | ✅ Automático | ❌ | ❌ | ⚠️ Add-on |
| Integración Cargo/Transporte | ✅ Nativo | ❌ | ❌ | ❌ |
| Multi-Campo Dinámico | ✅ Sin código | ⚠️ | ⚠️ | ✅ Con código |
| Costo para LATAM | $$ | $$$$$ | $$$ | $$$$$$ |
| Soporte en Español | ✅ | ⚠️ | ⚠️ | ⚠️ |

---

## 🔄 Flujo Completo de Trabajo

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        FLUJO DE TRABAJO CRM                             │
└─────────────────────────────────────────────────────────────────────────┘

1. CAPTACIÓN
   │
   ├── Widget público → Formulario embebido en sitio web
   │                    └── Crea contacto + oportunidad automáticamente
   │
   └── Manual → Crear contacto y/o organización desde el CRM

2. GESTIÓN DE OPORTUNIDADES
   │
   ├── Crear oportunidad vinculada a contacto/organización
   ├── Asignar responsable(s)
   ├── Mover entre etapas del pipeline (Kanban)
   └── Registrar actividades (llamadas, reuniones)

3. COTIZACIÓN
   │
   ├── Seleccionar producto configurado
   ├── Completar campos dinámicos (origen, destino, etc.)
   ├── Agregar múltiples servicios si es necesario
   ├── Generar PDF profesional
   └── Enviar por email o integrar con Cargo

4. CIERRE
   │
   ├── Marcar cotización como aceptada/rechazada
   ├── Actualizar estado de oportunidad (Ganada/Perdida)
   └── Sincronizar con sistema operativo (Cargo)

5. ANÁLISIS
   │
   └── Dashboard Metabase → Métricas de ventas, conversión, pipeline
```

---

## 📁 Estructura del Proyecto (Frontend)

```
src/
├── app/
│   ├── activities/          # Módulo de actividades
│   ├── calendar/            # Vista calendario
│   ├── configuration/       # Configuraciones
│   │   ├── catalog/         # Gestión de catálogos
│   │   ├── flow/            # Gestión de flujos/pipelines
│   │   ├── product/         # Gestión de productos
│   │   ├── integrations/    # Integraciones (Cargo, Google)
│   │   └── ...
│   ├── dashboard/           # Dashboard principal (Metabase)
│   ├── flow/                # Vista Kanban de oportunidades
│   ├── organization/        # Gestión de organizaciones
│   ├── person/              # Gestión de contactos
│   └── widget/              # Formulario público embebible
├── components/              # Componentes reutilizables
├── models/                  # Interfaces TypeScript
├── services/                # Servicios API
└── hooks/                   # Custom hooks
```

---

## 🚀 Conclusión

**GOxT CRM** es una solución especializada que combina la potencia de un CRM tradicional con la flexibilidad necesaria para industrias como el transporte y la logística. Su sistema de productos personalizables y cotizaciones dinámicas lo distingue de soluciones genéricas, mientras que su integración nativa con sistemas operativos elimina la duplicación de trabajo y asegura la sincronización de datos entre ventas y operaciones.

**Valor diferencial clave**: La capacidad de configurar productos con campos que se adaptan exactamente al negocio, permitiendo que equipos comerciales generen cotizaciones profesionales en minutos sin necesidad de hojas de cálculo o documentos manuales.

---

*Documento generado el 5 de Enero de 2026*
*GOxT CRM - Versión Frontend*
