module.exports = {
  manualSidebar: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'doc',
      id: 'guia-rapida', 
    },
    {
      type: 'category',
      label: '📚 Conceptos Básicos',
      collapsed: true,
      items: [
        'conceptos-basicos/index',          // ⬅️ SIN "1-"
        'conceptos-basicos/pautas-seguridad', // ⬅️ SIN "1-"
        'conceptos-basicos/herramientas-basicas', // ⬅️ SIN "1-"
      ],
    },
    {
      type: 'category',
      label: '💻 Mantenimiento Hardware',
      collapsed: true,
      items: [
        'mantenimiento-hardware/index',        // ⬅️ SIN "2-"
        'mantenimiento-hardware/limpieza-interna', // ⬅️ SIN "2-"
        'mantenimiento-hardware/limpieza-externa', // ⬅️ SIN "2-"
        'mantenimiento-hardware/componentes-detallados', // ⬅️ SIN "2-"
      ],
    },
    {
      type: 'category',
      label: '🛡️ Mantenimiento Software',
      collapsed: true,
      items: [
        'mantenimiento-software/index',        // ⬅️ SIN "3-"
        'mantenimiento-software/correctivo-software', // ⬅️ SIN "3-"
      ],
    },
    {
      type: 'category',
      label: '🔧 Detección de Errores',
      collapsed: true,
      items: [
        'deteccion-errores/index',             // ⬅️ SIN "4-"
        'deteccion-errores/problemas-frecuentes', // ⬅️ SIN "4-"
        'deteccion-errores/casos-especificos', // ⬅️ SIN "4-"
      ],
    },
    {
      type: 'category',
      label: '📎 Anexos',
      collapsed: true,
      items: [
        'anexos/checklist-completo',
        'anexos/recursos-adicionales',
      ],
    },
  ],
};