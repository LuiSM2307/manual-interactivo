# Mantenimiento Específico por Componente

## Propósito
Proporcionar guías detalladas de mantenimiento para componentes específicos del computador, abordando procedimientos especializados y mejores prácticas para cada elemento crítico del sistema.

## 🧠 Memoria RAM - Cuidados Especiales

### Propósito
Mantener los módulos de memoria RAM en óptimas condiciones para prevenir fallos de arranque, pantallazos azules y pérdida de datos.

### Señales de Problemas Comunes
- **❌ Computadora no enciende** (sin POST)
- **🔊 Pitidos específicos** al arrancar (códigos BIOS)
- **💥 Aplicaciones se cierran** inesperadamente
- **📊 Rendimiento inconsistente** en multitarea
- **🔄 Reinicios espontáneos** sin motivo aparente

### Procedimiento de Mantenimiento

#### Paso 1: Limpieza de Contactos
1. **Retirar módulos** presionando pestañas laterales
2. **Inspeccionar contactos** dorados por oxidación o suciedad
3. **Limpiar con goma de borrar** blanca suave (opcional)
4. **Limpiar con alcohol isopropílico** y hisopo
5. **Secar completamente** antes de reinstalar

#### Paso 2: Verificación de Instalación
1. **Alinear muescas** correctamente con la ranura
2. **Insertar con presión uniforme** hasta que las pestañas cierren
3. **Verificar que quede nivelado** y firme

#### Paso 3: Pruebas de Diagnóstico
1. **Usar MemTest86** para pruebas exhaustivas
2. **Probar módulos individualmente** para identificar fallos
3. **Verificar compatibilidad** de velocidades y timings

### ⚠️ Precauciones RAM
- **Manejar por los bordes** evitando tocar contactos
- **Evitar estática** usando pulsera antiestática
- **No forzar la instalación** - las muescas deben coincidir
- **Verificar voltaje** y compatibilidad con la placa madre

## 🚀 Procesador (CPU) - Mantenimiento Avanzado

### Propósito
Garantizar la disipación térmica óptima del procesador para prevenir throttling térmico y extender su vida útil.

### Señales de Necesidad de Mantenimiento
- **🌡️ Temperaturas altas** en reposo (>60°C)
- **📉 Rendimiento reducido** bajo carga
- **🌀 Ventilador a máxima velocidad** constantemente
- **🖥️ Cierres inesperados** por sobrecalentamiento

### Procedimiento: Cambio de Pasta Térmica

#### Paso 1: Preparación
1. **Apagar y desconectar** completamente el equipo
2. **Retirar disipador/ventilador** desconectando cable de alimentación
3. **Limpiar superficies** del CPU y disipador con alcohol isopropílico

#### Paso 2: Aplicación de Pasta Térmica
1. **Método del grano de arroz**: Pequeña cantidad en el centro del CPU
2. **Método de la cruz**: Línea delgada en forma de X para CPUs grandes
3. **Método de extensión**: Usar espátula plástica para distribución uniforme

#### Paso 3: Reinstalación
1. **Colocar disipador** con presión uniforme
2. **Asegurar mecanismo** de sujeción alternando tornillos
3. **Conectar ventilador** a header correcto de la placa madre

### 🔧 Técnicas Avanzadas
- **Undervolting controlado** para reducir temperaturas
- **Optimización de curva de ventiladores** en BIOS
- **Verificación de mounting pressure** del disipador

## 💾 Discos Duros - Prevención de Fallos

### Propósito
Monitorear y mantener la salud de las unidades de almacenamiento para prevenir pérdida de datos y fallos catastróficos.

### Diferencias Clave: HDD vs SSD

#### 🎯 HDD (Discos Mecánicos)
- **Sensibles a golpes** y vibraciones
- **Requieren desfragmentación** periódica
- **Verificar sectores defectuosos** regularmente
- **Monitorear temperatura** y SMART status

#### ⚡ SSD (Unidades de Estado Sólido)
- **NO desfragmentar** - reduce vida útil
- **Mantener al menos 15%** de espacio libre
- **Habilitar TRIM** en sistema operativo
- **Monitorear TBW** (Terabytes Written)

### Procedimiento de Mantenimiento

#### Para HDD:
1. **Desfragmentación mensual** (solo si fragmentación >10%)
2. **Verificación de sectores** con CHKDSK o herramientas del fabricante
3. **Monitoreo SMART** con CrystalDiskInfo
4. **Limpieza física** de conectores y superficie

#### Para SSD:
1. **Optimización TRIM** (automático en Windows 10/11)
2. **Limpieza de archivos temporales** regular
3. **Actualización firmware** según recomendaciones
4. **Evitar llenado completo** (>85% capacidad)

### 🚨 Señales de Alerta
- **🕒 Tiempos de acceso lentos** (HDD)
- **📂 Archivos corruptos** o inaccesibles
- **🔊 Ruidos extraños** (clicks en HDD)
- **❌ Errores SMART** en herramientas de diagnóstico

## 🔌 Puertos y Conectores - Mantenimiento Preventivo

### Propósito
Mantener la integridad física y funcionalidad de todos los puertos y conectores para asegurar conexiones estables.

### Mantenimiento por Tipo de Puerto

#### 🔘 USB (Todos los tipos)
1. **Inspección visual** de pines doblados o suciedad
2. **Limpieza con aire comprimido** para polvo superficial
3. **Limpieza profunda** con hisopo y alcohol isopropílico
4. **Verificar conexión firme** sin juego excesivo

#### 🖥️ HDMI/DisplayPort/VGA
1. **Asegurar tornillos** de fijación (cuando aplica)
2. **Limpiar contactos** con hisopo seco
3. **Verificar seguros** de retención
4. **Inspeccionar pines** por corrosión o daño

#### 🎧 Audio (3.5mm y óptico)
1. **Limpieza con hisopo seco** - evitar líquidos
2. **Verificar detección** de dispositivos
3. **Probar todos los canales** (izquierdo, derecho, micrófono)

#### 🌐 Ethernet/RJ45
1. **Limpiar con aire** el conector y puerto
2. **Verificar clip** de retención
3. **Probar velocidad** de conexión
4. **Inspeccionar cables** por daños físicos

### 🛡️ Protección Preventiva
- **Usar tapas** para puertos no utilizados
- **Evitar fuerza excesiva** al conectar/desconectar
- **Mantener organizados** los cables para evitar tensión
- **Rotar puertos** usados para desgaste uniforme

## 🔧 Herramientas Especializadas por Componente

### Para RAM
- [ ] MemTest86 o similar
- [ ] Alcohol isopropílico 99%
- [ ] Hisopos de precisión
- [ ] Lupa para inspección

### Para CPU
- [ ] Pasta térmica de calidad
- [ ] Espátulas de aplicación
- [ ] Alcohol isopropílico
- [ ] Limpiadores de superficie

### Para Discos
- [ ] CrystalDiskInfo/HDTune
- [ ] Herramientas del fabricante
- [ ] Software de benchmark
- [ ] Adaptadores SATA/USB

### Para Puertos
- [ ] Kit de limpieza de conectores
- [ ] Lupa iluminada
- [ ] Multímetro para continuidad
- [ ] Herramientas de inspección

## 📅 Calendario de Mantenimiento Continuo

### 🔵 Mensual
- [ ] Limpieza externa completa
- [ ] Verificación de temperaturas
- [ ] Monitoreo SMART de discos
- [ ] Limpieza de archivos temporales

### 🟡 Trimestral
- [ ] Limpieza interna básica
- [ ] Verificación de conexiones
- [ ] Actualización de controladores
- [ ] Pruebas de rendimiento

### 🔴 Anual
- [ ] Limpieza interna profunda
- [ ] Cambio de pasta térmica
- [ ] Verificación de componentes
- [ ] Actualización de firmware/BIOS

## ⚠️ Notas de Seguridad por Componente
- **⚠️ CPU**: Nunca energizar sin disipador instalado
- **⚠️ RAM**: Verificar compatibilidad antes de actualizar
- **⚠️ Discos**: Realizar backup antes de mantenimiento
- **⚠️ Puertos**: Desconectar energía antes de limpiar

## 🎯 Mejores Prácticas
- **Documentar** cambios y mantenimientos realizados
- **Monitorear proactivamente** con herramientas de diagnóstico
- **Mantener actualizados** controladores y firmware
- **Realizar backups** antes de cualquier mantenimiento mayor

---