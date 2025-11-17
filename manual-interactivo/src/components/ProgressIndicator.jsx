import React from 'react';
import Link from '@docusaurus/Link';

export default function ProgressIndicator() {
  const steps = [
    { label: 'Conceptos Básicos', path: '/docs/conceptos-basicos', emoji: '📚' },
    { label: 'Mantenimiento Hardware', path: '/docs/mantenimiento-hardware', emoji: '💻' },
    { label: 'Mantenimiento Software', path: '/docs/mantenimiento-software', emoji: '🛡️' },
    { label: 'Detección de Errores', path: '/docs/deteccion-errores', emoji: '🔧' }
  ];

  return (
    <div style={{
      background: 'var(--ifm-card-background-color)',
      border: '1px solid var(--ifm-color-emphasis-200)',
      borderRadius: '12px',
      padding: '1.5rem',
      margin: '2rem 0',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
    }}>
      <h4 style={{
        margin: '0 0 1rem 0',
        textAlign: 'center',
        color: 'var(--ifm-color-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
      }}>
        <span>🎯</span> Tu Ruta de Aprendizaje Recomendada
      </h4>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
        {steps.map((step, index) => (
          <Link
            key={step.label}
            to={step.path}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem 1rem',
              background: 'var(--ifm-color-emphasis-100)',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'var(--ifm-font-color-base)',
              transition: 'all 0.3s ease',
              border: '1px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--ifm-color-primary)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateX(8px)';
              e.currentTarget.style.borderColor = 'var(--ifm-color-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--ifm-color-emphasis-100)';
              e.currentTarget.style.color = 'var(--ifm-font-color-base)';
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.borderColor = 'transparent';
            }}
          >
            <div style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              background: 'var(--ifm-color-primary)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '0.875rem',
              flexShrink: 0
            }}>
              {index + 1}
            </div>
            <span style={{ fontSize: '1.5rem' }}>{step.emoji}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>
                {step.label}
              </div>
            </div>
            <span style={{ 
              opacity: 0.7,
              transition: 'opacity 0.3s ease'
            }}>
              →
            </span>
          </Link>
        ))}
      </div>
      
      <p style={{
        margin: '1rem 0 0 0',
        fontSize: '0.875rem',
        textAlign: 'center',
        opacity: 0.7,
        fontStyle: 'italic'
      }}>
        Sigue este orden para un aprendizaje progresivo y efectivo
      </p>
    </div>
  );
}