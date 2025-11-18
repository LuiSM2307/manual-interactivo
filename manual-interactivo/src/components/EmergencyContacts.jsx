import React from 'react';
import Link from '@docusaurus/Link';

export default function EmergencyContacts() {
  return (
    <div className="emergency-contacts">
      <div className="contact-card">
        <h3>🏫 Soporte Técnico Institucional</h3>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span>Teléfono: [Número de contacto]</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span>Email: [correo de soporte]</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🕒</span>
            <span>Horario: [horario de atención]</span>
          </div>
        </div>
      </div>

      <div className="resources-section">
        <h4>🔗 Recursos Adicionales</h4>
        <div className="resource-links">
          <Link className="resource-link" to="/docs">
            📚 Manual Completo
          </Link>
          <Link className="resource-link" to="/docs/mantenimiento-software">
            🛡️ Mantenimiento Preventivo
          </Link>
          <Link className="resource-link" to="/docs/deteccion-errores">
            🔧 Detección de Errores
          </Link>
        </div>
      </div>
    </div>
  );
}