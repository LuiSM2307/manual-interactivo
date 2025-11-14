# Detección y Diagnóstico de Errores

## 🔍 Introducción a la Detección de Fallos

El diagnóstico preciso es el primer paso hacia una solución efectiva. Esta sección te guiará a través de los métodos sistemáticos para identificar y resolver problemas hardware y software, comenzando con los famosos "códigos de pitidos" que tu computador usa para comunicar fallos críticos durante el arranque.

> **Sabías que**: Más del 80% de los problemas de hardware pueden ser diagnosticados correctamente mediante la interpretación adecuada de los códigos de error del sistema.

## 🆘 Códigos de Pitidos (POST Beep Codes)

### ¿Qué son los códigos de pitidos?
Cuando enciendes tu computadora, la BIOS/UEFI realiza una **autocomprobación de encendido (POST - Power-On Self-Test)** para verificar que todos los componentes hardware esenciales estén presentes y funcionen correctamente.

- ✅ **POST exitoso**: Un único pitido corto (en la mayoría de casos) y el sistema procede a cargar el sistema operativo
- ❌ **POST fallido**: Secuencias de pitidos específicas que indican la naturaleza del problema
- 🎯 **Propósito**: Comunicar errores cuando la pantalla no está disponible para mostrar mensajes

### Identificación de tu BIOS
**Primero, identifica el fabricante de tu BIOS:**
- Mirar la pantalla inicial al encender (antes del POST)
- Revisar el manual de la placa madre
- Buscar el modelo de placa madre en internet
- Usar herramientas como CPU-Z o HWiNFO

## 📊 Tablas de Códigos de Pitidos por Fabricante

### BIOS AMI (American Megatrends)

| Código de Pitidos | Significado | Acción Recomendada |
|-------------------|-------------|-------------------|
| 1 corto | POST exitoso | Sistema funcionando correctamente |
| 2 cortos | Error de paridad en RAM | Reinstalar/verificar memoria |
| 3 cortos | Fallo en primeros 64KB de RAM | Probar módulos individualmente |
| 4 cortos | Timer del sistema fallido | Posible falla de placa madre |
| 5 cortos | Error del procesador (CPU) | Verificar instalación de CPU |
| 6 cortos | Error del teclado | Verificar conexión de teclado |
| 7 cortos | Excepción de modo virtual | Error general de CPU/placa madre |
| 8 cortos | Error de memoria gráfica | Verificar tarjeta de video |
| 9 cortos | Error de checksum de BIOS | Actualizar/restaurar BIOS |
| 10 cortos | Error de registro CMOS | Resetear configuración CMOS |
| 1 largo + 2 cortos | Error de tarjeta de video | Reinstalar tarjeta gráfica |
| 1 largo + 3 cortos | Error de memoria de video | Verificar memoria de gráficos |
| Pitido largo continuo | Fallo de memoria RAM | Reinstalar módulos de RAM |

### BIOS Award/Phoenix

| Código de Pitidos | Significado | Acción Recomendada |
|-------------------|-------------|-------------------|
| 1 largo | POST exitoso | Sistema normal |
| 1 largo + 2 cortos | Error de tarjeta de video | Verificar tarjeta gráfica |
| Pitidos cortos continuos | Fallo de memoria RAM | Reinstalar memoria |
| Pitidos largos continuos | Fallo de memoria RAM | Probar módulos individualmente |
| 1 largo + 3 cortos | Error del teclado | Verificar teclado |
| Pitidos agudos alternados | Fallo de CPU/sobrecalentamiento | Verificar CPU y refrigeración |

### BIOS Phoenix (Secuencias con pausas)

| Secuencia | Significado | Gravedad |
|-----------|-------------|----------|
| 1-1-3 | Error de acceso a CMOS | Media |
| 1-1-4 | Error de checksum de BIOS | Alta |
| 1-2-1 | Error del timer de interrupciones | Alta |
| 1-3-1 | Error de RAM | Alta |
| 2-X-X | Error general de memoria RAM | Alta |
| 3-3-1 | Error de batería CMOS | Baja |
| 4-2-1 | Error del timer del sistema | Media |
| 4-2-2 | Error de teclado | Baja |
| 4-2-3 | Error de CPU | Alta |
| 4-2-4 | Error del controlador de teclado | Media |

## 🔄 Flujo de Acción para Diagnosticar por Pitidos

### Paso 1: Escucha y Documenta
- **Presta atención total** a la secuencia de pitidos
- **Cuenta pitidos** y determina si son largos o cortos
- **Anota exactamente** la secuencia escuchada
- **Graba con tu teléfono** si es una secuencia compleja

### Paso 2: Identifica tu BIOS
- **Consulta el manual** de tu placa madre
- **Revisa la pantalla** de inicio (flash de BIOS)
- **Usa herramientas** como CPU-Z si el sistema arranca parcialmente
- **Busca online** con el modelo de tu placa madre

### Paso 3: Interpreta el Código
- **Consulta las tablas** anteriores según tu fabricante de BIOS
- **Verifica múltiples fuentes** para confirmar
- **Considera el contexto** (cambios recientes, edad del equipo)

### Paso 4: Aplica Soluciones Básicas
- **Siempre comienza** con las soluciones más simples
- **Sigue un orden lógico** de complejidad creciente
- **Documenta cada paso** y su resultado

## 🎯 Problemas Comunes y Soluciones Rápidas

### 🔧 Problema: Pitidos relacionados con la RAM

**Síntomas:**
- Pitidos continuos o secuencias específicas de memoria
- Sistema no completa el POST
- Pantalla permanece en negro

**Procedimiento de Solución:**
1. **Apagar completamente** y desconectar la energía
2. **Abrir el case** con precauciones antiestáticas
3. **Reinstalar memoria RAM**: Sacar y volver a insertar firmemente
4. **Probar módulos individualmente** en diferentes ranuras
5. **Limpiar contactos** con goma de borrar blanca si es necesario
6. **Verificar compatibilidad** de la memoria con la placa madre

### 🎮 Problema: Pitidos relacionados con la Tarjeta de Video

**Síntomas:**
- Secuencias específicas para errores gráficos
- Pantalla negra pero sistema parece encender
- Ventiladores funcionan pero no hay video

**Procedimiento de Solución:**
1. **Reinstalar tarjeta de video** en la ranura PCIe
2. **Verificar conectores de alimentación** (6/8 pines)
3. **Probar con gráficos integrados** (si están disponibles)
4. **Limpiar contactos** dorados de la tarjeta
5. **Probar en otra ranura PCIe** si es posible
6. **Verificar en otro equipo** para descartar falla de hardware

### ⌨️ Problema: Error de Teclado

**Síntomas:**
- Pitidos específicos de error de teclado
- Teclas no responden durante el POST
- Sistema no continúa el arranque

**Procedimiento de Solución:**
1. **Verificar conexión física** del teclado
2. **Probar con otro teclado** conocido como funcional
3. **Probar diferentes puertos** USB/PS2
4. **Verificar en BIOS** si el teclado es detectado
5. **Resetear configuración CMOS** si persiste el error

### 🔋 Problema: Error de CMOS/BIOS

**Síntomas:**
- Pitidos específicos de error CMOS/BIOS
- Configuración de BIOS se resetea constantemente
- Fecha y hora incorrectas persistentemente

**Procedimiento de Solución:**
1. **Resetear CMOS/BIOS** mediante jumper CLR_CMOS
2. **Remover batería CMOS** por 5-10 minutos
3. **Reemplazar batería** si el problema persiste
4. **Actualizar BIOS** a versión más reciente
5. **Verificar voltaje de batería** con multímetro

## 📋 Checklist de Diagnóstico Rápido

### ✅ Preparación Básica
- [ ] Herramientas antiestáticas listas
- [ ] Manual de placa madre disponible
- [ ] Equipo de iluminación preparado
- [ ] Herramientas de desensamblaje a mano

### ✅ Diagnóstico por Pitidos
- [ ] Secuencia de pitidos documentada
- [ ] Fabricante de BIOS identificado
- [ ] Código interpretado correctamente
- [ ] Solución apropiada seleccionada

### ✅ Verificación Post-Reparación
- [ ] Sistema completa POST exitosamente
- [ ] Pantalla muestra información normal
- [ ] No hay pitidos de error
- [ ] Sistema carga sistema operativo

## ⚠️ Consideraciones Importantes

### Seguridad Primero
- **Siempre desconecta la energía** antes de manipular componentes
- **Usa pulsera antiestática** para proteger componentes sensibles
- **Trabaja en área bien iluminada** y organizada

### Cuando Buscar Ayuda Profesional
- **Problemas persistentes** después de aplicar soluciones básicas
- **Equipos bajo garantía** (para no invalidarla)
- **Fallas intermitentes** difíciles de reproducir
- **Falta de herramientas** o conocimiento especializado

---

## Contenido de esta Sección
En esta sección encontrarás:
1. [Problemas Frecuentes](./problemas-frecuentes.md) - Soluciones a errores comunes del día a día
---

*Última actualización: 14/11/2025*