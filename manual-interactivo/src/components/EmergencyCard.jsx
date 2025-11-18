import React from 'react';

export default function EmergencyCard({ title, severity, children }) {
  const severityColors = {
    critical: '#ff4444',
    high: '#ff8800',
    medium: '#ffbb33',
    low: '#00C851'
  };

  return (
    <div className="emergency-card" style={{ borderLeftColor: severityColors[severity] }}>
      <div className="emergency-card-header">
        <h4>{title}</h4>
        <span className="severity-badge" style={{ background: severityColors[severity] }}>
          {severity.toUpperCase()}
        </span>
      </div>
      <div className="emergency-card-content">
        {children}
      </div>
    </div>
  );
}