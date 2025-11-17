import React, { useState, useRef, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { getGlossaryTerm } from '@site/src/data/glossaryData';

export default function GlossaryTerm({ term, children, showIcon = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [placement, setPlacement] = useState('bottom'); // 'bottom' o 'top'
  const termRef = useRef(null);
  const tooltipRef = useRef(null);

  const termData = getGlossaryTerm(term);

  // Si no encontramos el término, mostramos el texto normal
  if (!termData) {
    console.warn(`Término no encontrado en el glosario: ${term}`);
    return children;
  }

  const { definition, category } = termData;

  // Calcular posición del tooltip
  useEffect(() => {
    if (isHovered && termRef.current && tooltipRef.current) {
      const rect = termRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      
      // Calcular posición inicial (abajo del término)
      let top = rect.top - tooltipRect.height - 10;
      let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
      let newPlacement = 'bottom';

      // Si no hay espacio abajo, mostrar arriba
      if (top + tooltipRect.height > window.innerHeight + scrollY) {
        top = rect.top + scrollY - tooltipRect.height - 10;
        newPlacement = 'top';
      }

      // Ajustar horizontalmente
      if (left < 10) left = 10;
      if (left + tooltipRect.width > window.innerWidth - 10) {
        left = window.innerWidth - tooltipRect.width - 10;
      }

      setPosition({ top, left });
      setPlacement(newPlacement);
    }
  }, [isHovered]);

  const handleClick = (e) => {
    e.preventDefault();
    // Navegar a la página del glosario con el término específico
    window.location.href = `/docs/anexos/glosario#${term.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <span 
      ref={termRef}
      className="glossary-term"
      style={{
        textDecoration: 'underline',
        textDecorationStyle: 'dotted',
        textDecorationColor: 'var(--ifm-color-primary)',
        cursor: 'pointer',
        position: 'relative',
        color: 'var(--ifm-color-primary)',
        fontWeight: '600'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      title={`Haz clic para ver la definición completa de ${term}`}
    >
      {children}
      {showIcon && (
        <sup style={{ 
          fontSize: '0.7em', 
          marginLeft: '2px',
          opacity: 0.7 
        }}>
          📖
        </sup>
      )}
      
      {isHovered && (
        <div 
          ref={tooltipRef}
          className={`glossary-tooltip ${placement}`}
          style={{
            position: 'fixed',
            top: `${position.top}px`,
            left: `${position.left}px`,
            padding: '1rem',
            borderRadius: '8px',
            fontSize: '0.875rem',
            width: '280px',
            textAlign: 'left',
          }}
        >
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            marginBottom: '0.5rem',
            position: 'relative',
            zIndex: 10003
          }}>
            <strong style={{ 
              color: 'var(--ifm-color-primary)',
              fontSize: '0.95rem'
            }}>
              {term}
            </strong>
            <span style={{
              fontSize: '0.7rem',
              background: 'var(--ifm-color-emphasis-200)',
              padding: '0.2rem 0.5rem',
              borderRadius: '12px',
              opacity: 0.8
            }}>
              {category}
            </span>
          </div>
          
          <p style={{ 
            margin: '0 0 0.75rem 0',
            lineHeight: '1.4',
            position: 'relative',
            zIndex: 10003
          }}>
            {definition}
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.75rem',
            opacity: 0.7,
            borderTop: '1px solid var(--ifm-color-emphasis-200)',
            paddingTop: '0.5rem',
            position: 'relative',
            zIndex: 10003
          }}>
            <span>Haz clic para más detalles</span>
            <span>→</span>
          </div>
        </div>
      )}
    </span>
  );
}