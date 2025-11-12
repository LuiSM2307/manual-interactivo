# Mantenimiento Correctivo

## Propósito
Establecer procedimientos sistemáticos para diagnosticar y resolver problemas de software una vez que han ocurrido, restaurando la funcionalidad del sistema de manera eficiente y efectiva.

## ¿Qué es el Mantenimiento Correctivo?

El **Mantenimiento Correctivo de Software** es el conjunto de acciones técnicas dirigidas a diagnosticar y solucionar fallos específicos en el sistema operativo, aplicaciones o configuraciones que impiden el funcionamiento normal del computador. 

### Características Clave:
- 🚨 **Reactivo**: Se activa cuando un problema ya se ha manifestado
- 🎯 **Específico**: Se enfoca en síntomas y causas particulares
- ⚡ **Urgente**: Busca restaurar la funcionalidad lo antes posible
- 📊 **Diagnóstico-intensivo**: Requiere identificación precisa de la causa raíz

## 🔧 Proceso Sistemático de Mantenimiento Correctivo

### Metodología de 6 Pasos

#### Paso 1: Identificación del Problema
**Recopilación de información precisa:**
- ¿Cuándo comenzó el problema?
- ¿Qué acciones lo desencadenan?
- ¿El problema es constante o intermitente?
- ¿Hay mensajes de error específicos?

**Ejemplos de síntomas comunes:**
- "El computador se reinicia solo"
- "Photoshop se cierra inesperadamente"
- "No puedo conectarme a Internet"
- "Aparecen ventanas emergentes constantemente"

#### Paso 2: Aislamiento de la Causa
**Determinar el alcance del problema:**
- ¿Es específico de una aplicación o afecta todo el sistema?
- ¿Ocurre con un usuario específico o con todos?
- ¿Está relacionado con hardware o es puramente software?

**Técnicas de aislamiento:**
- Probar con diferentes usuarios
- Ejecutar en modo seguro
- Desconectar periféricos
- Revertir cambios recientes

#### Paso 3: Diagnóstico Profesional
**Utilizar herramientas de diagnóstico específicas:**

| Herramienta | Propósito | Comando/Ejemplo |
|-------------|-----------|-----------------|
| **Administrador de tareas** | Procesos y rendimiento | Ctrl + Shift + Esc |
| **Visor de eventos** | Logs del sistema | `eventvwr.msc` |
| **Monitor de recursos** | Uso detallado de recursos | `resmon` |
| **Símbolo del sistema** | Comandos avanzados | CMD como administrador |

#### Paso 4: Aplicación de la Solución
**Seleccionar la solución apropiada según el diagnóstico:**

### 🔥 Ejemplos Prácticos de Soluciones

#### Caso 1: Programa No Responde

**Síntoma**: Aplicación se congela y no responde
Solución:
- Abrir Administrador de Tareas (Ctrl + Shift + Esc)
- Buscar el proceso de la aplicación
- Seleccionar "Finalizar tarea"
- Reiniciar la aplicación

#### Caso 2: Infección de Malware

**Síntoma**: Ventanas emergentes, lentitud extrema, cambios no autorizados
Solución:
- Ejecutar análisis completo con antivirus principal
- Ejecutar escáner secundario (Malwarebytes)
- Reiniciar en modo seguro si es necesario
- Usar herramientas de eliminación específicas

#### Caso 3: Controlador Dañado

**Síntoma**: Dispositivo no funciona o funciona erraticamente
Solución:
- Abrir Administrador de dispositivos (devmgmt.msc)
- Buscar dispositivo con signo de exclamación
- Actualizar controlador → Buscar automáticamente
- Si no funciona, descargar desde sitio oficial del fabricante

#### Caso 4: Archivos de Sistema Dañados

**Síntoma**: Errores aleatorios, aplicaciones que no inician
Solución:
- Abrir Símbolo del sistema como administrador
- Ejecutar: sfc /scannow
- Si SFC no funciona, ejecutar: DISM /Online /Cleanup-Image /RestoreHealth
- Reiniciar el sistema

#### Caso 5: Fallo de Arranque del Sistema

**Síntoma**: Computador no inicia Windows
Solución:
- Usar medios de instalación/recuperación
- Seleccionar "Reparar equipo"
- Usar "Reparación de inicio"
- Si falla, usar "Restaurar sistema" o restaurar desde backup

## 🚨 Problemas Comunes y Soluciones Específicas

### Problema: Sistema Extremadamente Lento

#### Diagnóstico Diferencial:
- **Alto uso de CPU**: Verificar procesos en Administrador de tareas
- **Falta de memoria RAM**: Monitorear uso de memoria y archivo de paginación
- **Disco al 100%**: Verificar procesos de disco y estado del almacenamiento
- **Malware**: Ejecutar escaneos de seguridad

#### Soluciones Escalonadas:
1. **Liberar espacio en disco** (>15% libre en SSD, >10% en HDD)
2. **Aumentar memoria virtual** (1.5x la RAM física)
3. **Deshabilitar programas de inicio innecesarios**
4. **Ejecutar limpieza de archivos temporales**
5. **Escaneo antimalware completo**

### Problema: Errores de Aplicación Recurrentes

#### Causas Principales:
- 📁 **Archivos corruptos** de la aplicación
- 🔄 **Conflictos con otro software**
- 📦 **Versión desactualizada**
- ⚙️ **Configuración incorrecta**

#### Protocolo de Solución:
1. **Reparar instalación** (Programas y características)
2. **Actualizar a la última versión estable**
3. **Reinstalar completamente** la aplicación
4. **Ejecutar como administrador** (solo si es necesario)
5. **Comprobar compatibilidad** con el sistema operativo

### Problema: Infecciones de Malware Persistente

#### Síntomas de Alerta:
- 🔍 Búsquedas redirigidas en navegador
- 💻 Aparición de programas no instalados
- 🐌 Lentitud extrema e inusual
- 💰 Mensajes de ransomware o scareware

#### Procedimiento de Eliminación:
1. **Desconectar de Internet** para evitar filtración de datos
2. **Reiniciar en modo seguro con funciones de red**
3. **Ejecutar escáner antimalware** actualizado
4. **Usar herramientas especializadas** (AdwCleaner, etc.)
5. **Restaurar navegadores** a configuración predeterminada
6. **Cambiar todas las contraseñas** importantes

### Problema: Fallos Críticos de Arranque

#### Diagnóstico por Códigos de Error:
- **0xC00000e9**: Error de hardware/disco
- **INACCESSIBLE_BOOT_DEVICE**: Controladores o disco
- **CRITICAL_PROCESS_DIED**: Archivos de sistema dañados

#### Soluciones Graduales:
1. **Reparación automática de inicio**
2. **Restaurar sistema desde punto de restauración**
3. **Reparar MBR/GPT** (`bootrec /fixmbr`, `bootrec /fixboot`)
4. **Reconstruir BCD** (`bootrec /rebuildbcd`)
5. **Restaurar desde copia de seguridad completa**

## 🛠️ Kit de Herramientas para Mantenimiento Correctivo

### Herramientas de Diagnóstico
- **Windows Built-in**: Event Viewer, Resource Monitor, Performance Monitor
- **Terceros**: HWMonitor, CrystalDiskInfo, CPU-Z, GPU-Z
- **Red**: Ping, Traceroute, IPConfig, Network Monitor

### Herramientas de Reparación
- **Sistema**: SFC, CHKDSK, DISM, Windows Recovery Environment
- **Limpieza**: CCleaner, BleachBit, Windows Disk Cleanup
- **Recuperación**: Recuva, TestDisk, PhotoRec
- **Malware**: Malwarebytes, AdwCleaner, HitmanPro

### Herramientas de Administración
- **Administrador de tareas** mejorado (Windows 10/11)
- **Administrador de dispositivos** para controladores
- **Servicios** (`services.msc`) para servicios de Windows
- **Editor del registro** (solo para usuarios avanzados)

## 📝 Protocolo de Actuación Estándar

### Flujo de Trabajo para Cualquier Problema

#### Fase 1: Evaluación Inicial (5-10 minutos)
- [ ] Documentar síntomas específicos
- [ ] Replicar el problema (si es posible)
- [ ] Verificar cambios recientes en el sistema
- [ ] Determinar urgencia e impacto

#### Fase 2: Diagnóstico Sistemático (10-30 minutos)
- [ ] Usar herramientas de diagnóstico apropiadas
- [ ] Aislar el componente o software afectado
- [ ] Identificar la causa raíz del problema
- [ ] Documentar hallazgos

#### Fase 3: Aplicación de Soluciones (15-60 minutos)
- [ ] Seleccionar la solución menos invasiva primero
- [ ] Implementar solución paso a paso
- [ ] Verificar que la solución resuelve el problema
- [ ] Documentar el procedimiento aplicado

#### Fase 4: Verificación y Prevención (5-15 minutos)
- [ ] Probar funcionalidad completamente
- [ ] Monitorear estabilidad del sistema
- [ ] Implementar medidas preventivas
- [ ] Actualizar documentación técnica

## ⚠️ Consideraciones de Seguridad

### Antes de Cualquier Intervención:
- **Realizar backup** de datos críticos
- **Crear punto de restauración** del sistema
- **Documentar configuración actual**
- **Tener medios de recuperación** disponibles

### Durante la Intervención:
- **Seguir procedimientos** establecidos
- **No saltarse pasos** de verificación
- **Probar después de cada cambio**
- **Mantener registro** de modificaciones

## 🔧 Herramientas Necesarias
- [ ] Medios de instalación/recuperación de Windows
- [ ] Suite de diagnóstico del fabricante
- [ ] Herramientas antimalware actualizadas
- [ ] Software de backup y recuperación
- [ ] Utilidades de limpieza y optimización
- [ ] Documentación técnica del sistema

## 📊 Tiempos Estimados por Tipo de Problema
- **Problemas simples**: 15-30 minutos
- **Problemas moderados**: 1-2 horas
- **Problemas complejos**: 2-4 horas
- **Desastres del sistema**: 4+ horas (con recuperación)

---