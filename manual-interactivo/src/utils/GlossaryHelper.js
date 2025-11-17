import { glossaryTerms } from '@site/src/data/glossaryData';

// Función para verificar términos no utilizados
export const checkUnusedTerms = (content) => {
  const usedTerms = new Set();
  
  // Buscar términos usados en el contenido (simplificado)
  Object.keys(glossaryTerms).forEach(term => {
    if (content.toLowerCase().includes(term.toLowerCase())) {
      usedTerms.add(term);
    }
  });

  const unusedTerms = Object.keys(glossaryTerms).filter(term => !usedTerms.has(term));
  
  console.log('📊 Análisis del Glosario:');
  console.log(`Términos definidos: ${Object.keys(glossaryTerms).length}`);
  console.log(`Términos utilizados: ${usedTerms.size}`);
  console.log(`Términos no utilizados: ${unusedTerms.length}`);
  
  if (unusedTerms.length > 0) {
    console.log('Términos no utilizados:', unusedTerms);
  }
  
  return { usedTerms, unusedTerms };
};