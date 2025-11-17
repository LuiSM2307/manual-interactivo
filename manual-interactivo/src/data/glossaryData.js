// Base de datos de términos del glosario
export const glossaryTerms = {
  // Conceptos básicos
  'hardware': {
    definition: 'Componentes físicos de una computadora (CPU, RAM, disco duro, etc.)',
    category: 'conceptos-basicos',
    fullDefinition: 'El hardware se refiere a todas las partes físicas y tangibles de un sistema informático...',
    related: ['software', 'periféricos']
  },
  'software': {
    definition: 'Programas y aplicaciones que ejecuta la computadora',
    category: 'conceptos-basicos', 
    fullDefinition: 'El software es la parte lógica e intangible de una computadora...',
    source: 'https://concepto.de/software/',
    related: ['hardware', 'sistema operativo']
  },
  'mantenimiento preventivo': {
    definition: 'Acciones para prevenir fallos antes de que ocurran',
    category: 'conceptos-basicos',
    fullDefinition: 'El mantenimiento preventivo consiste en tareas periódicas de revisión...',
    related: ['mantenimiento correctivo', 'hardware']
  },
  'mantenimiento correctivo': {
    definition: 'Reparación de fallos una vez que han ocurrido',
    category: 'conceptos-basicos',
    fullDefinition: 'El mantenimiento correctivo se realiza cuando un equipo ya presenta una falla...',
    related: ['mantenimiento preventivo', 'diagnóstico']
  },
  // Hardware
  'cpu': {
    definition: 'Unidad Central de Procesamiento - cerebro de la computadora',
    category: 'hardware',
    fullDefinition: 'La CPU es el componente principal que ejecuta instrucciones...',
    related: ['ram', 'motherboard']
  },
  'ram': {
    definition: 'Memoria de acceso aleatorio - memoria temporal de trabajo',
    category: 'hardware',
    fullDefinition: 'La RAM almacena temporalmente los datos que la CPU necesita...',
    related: ['cpu', 'almacenamiento']
  },

  // Agrega más términos según necesites...
  'termino': {
    definition: 'Aqui va la definición del término',
    category: 'categoria',
    fullDefinition: 'Esta parte es para una definición más detallada del término.',
    related: [/* términos relacionados */'ejemplo']
  },
};

// Función helper para buscar términos
export const getGlossaryTerm = (term) => {
  return glossaryTerms[term.toLowerCase()];
};

// Función para obtener todos los términos de una categoría
export const getTermsByCategory = (category) => {
  return Object.entries(glossaryTerms)
    .filter(([_, data]) => data.category === category)
    .map(([term, data]) => ({ term, ...data }));
};