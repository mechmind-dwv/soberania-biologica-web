# TOXEMIA - Plataforma de Denuncia Colectiva sobre Disruptores Endocrinos

## Visión
Plataforma de resistencia biológica que expone la conexión entre disruptores endocrinos (EDCs), el poder financiero corporativo y la normalización del daño biológico, incluyendo la hipótesis de su relación con crisis de identidad como el fenómeno Therian.

## Arquitectura Técnica
- **Frontend:** React 19 + Tailwind 4 con estética brutalista
- **Backend:** Express 4 + tRPC 11 + Manus Auth
- **Base de Datos:** MySQL con Drizzle ORM
- **IA:** Chatbot especializado con Forge API
- **Almacenamiento:** S3 para infografías y documentos

---

## Funcionalidades Principales

### Core Features
- [ ] 1. Manifiesto de Soberanía Biológica - Declaración fundamentada en Dr. Olea conectando EDCs con Therians
- [ ] 2. Mapa Interactivo del Poder - Visualización de conexiones corporativas (11 corporaciones, BlackRock, Vanguard, EDCs)
- [ ] 3. Sección Therians y Toxicidad - Análisis de hipótesis Therian-EDC
- [ ] 4. Guía de Desobediencia Química - Recomendaciones prácticas del Dr. Olea
- [ ] 5. Base de Datos de Productos Engañosos - Sistema de denuncia ciudadana (greenwashing, sustitutos tramposos)
- [ ] 6. Biblioteca de Investigación - Repositorio de estudios científicos e informes de ONGs
- [ ] 7. Sección de Acción Colectiva - Generador de cartas, peticiones, campañas
- [ ] 8. Timeline de Regulaciones - Cronología de prohibiciones y retrasos regulatorios

### Funcionalidades Avanzadas
- [ ] 9. Sistema de Notificaciones Automáticas - Alertas sobre regulaciones, estudios y lobbying
- [ ] 10. Generador de Infografías - Crear visuales personalizadas para redes sociales
- [ ] 11. Chatbot Especializado en EDCs - Responde preguntas, interpreta estudios, identifica químicos

---

## Diseño y UX

### Estética Brutalista
- [ ] Tipografía sans-serif masiva y peso pesado (negro intenso sobre blanco)
- [ ] Asimetría de alto contraste con líneas geométricas gruesas
- [ ] Corchetes, subrayados y elementos geométricos como separadores
- [ ] Espacio negativo abundante alrededor de elementos sobredimensionados
- [ ] Atmósfera cruda, industrial, sin pulir

### Estructura de Navegación
- [ ] Página de inicio con manifiesto impactante
- [ ] Navegación principal clara y brutalista
- [ ] Secciones bien diferenciadas visualmente
- [ ] Responsive design que mantiene brutalismo en móvil

---

## Base de Datos

### Tablas Principales
- [ ] users (extender con rol de denunciante, moderador, investigador)
- [ ] products (productos reportados con detalles de EDCs)
- [ ] reports (denuncias ciudadanas sobre greenwashing)
- [ ] research_items (estudios científicos y documentos)
- [ ] regulations (timeline de regulaciones)
- [ ] notifications (sistema de alertas)
- [ ] infographics (infografías generadas)

---

## Implementación por Fase

### Fase 1: Fundamentos (Diseño + Estructura)
- [ ] Configurar paleta de colores brutalista en Tailwind
- [ ] Crear componentes base (tipografía, botones, tarjetas)
- [ ] Diseñar layout principal y navegación
- [ ] Crear página de inicio con manifiesto

### Fase 2: Contenido Estático (Funcionalidades 1-4)
- [ ] Implementar Manifiesto de Soberanía Biológica
- [ ] Crear Mapa Interactivo del Poder (con datos reales)
- [ ] Desarrollar sección Therians y Toxicidad
- [ ] Construir Guía de Desobediencia Química

### Fase 3: Interactividad Ciudadana (Funcionalidades 5-8)
- [ ] Crear sistema de Base de Datos de Productos
- [ ] Implementar formulario de denuncia ciudadana
- [ ] Construir Biblioteca de Investigación con búsqueda
- [ ] Desarrollar Sección de Acción Colectiva
- [ ] Crear Timeline de Regulaciones interactivo

### Fase 4: IA y Automatización (Funcionalidades 9-11)
- [ ] Implementar sistema de Notificaciones Automáticas
- [ ] Crear Generador de Infografías con IA
- [ ] Desarrollar Chatbot especializado en EDCs
- [ ] Integrar Forge API para LLM

### Fase 5: Refinamiento y Lanzamiento
- [ ] Testing completo de todas las funcionalidades
- [ ] Optimización de rendimiento
- [ ] Auditoría de accesibilidad
- [ ] Preparar para lanzamiento público

---

## Prioridades Inmediatas

1. Crear estructura brutalista base
2. Implementar Manifiesto y Mapa Interactivo (impacto visual máximo)
3. Desarrollar sistema de denuncia ciudadana
4. Integrar Chatbot de IA
5. Lanzar versión MVP

---

## Notas Importantes

- La plataforma debe ser **resistencia biológica activa**, no solo información
- Cada sección debe conectar con la hipótesis central: EDCs → normalización del daño → crisis de identidad
- Mantener rigor científico (citas del Dr. Olea, estudios peer-reviewed)
- Diseño debe ser **provocador pero accesible** a público general
- Priorizar seguridad de datos de denunciantes
