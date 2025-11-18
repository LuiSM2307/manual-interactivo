import React from 'react';

export default function BeepCodesTable() {
  const beepCodes = [
    { beeps: '1 corto', meaning: 'POST exitoso', action: 'Esperar inicio' },
    { beeps: '1 largo + 2 cortos', meaning: 'Error gráfico', action: 'Verificar tarjeta video' },
    { beeps: 'Continuos', meaning: 'RAM', action: 'Resientar memorias' },
    { beeps: '1 largo + 3 cortos', meaning: 'Teclado', action: 'Verificar conexión' }
  ];

  return (
    <div className="beep-codes-table">
      <table>
        <thead>
          <tr>
            <th>🔊 Pitidos</th>
            <th>📝 Significado</th>
            <th>⚡ Acción Inmediata</th>
          </tr>
        </thead>
        <tbody>
          {beepCodes.map((code, index) => (
            <tr key={index}>
              <td><strong>{code.beeps}</strong></td>
              <td>{code.meaning}</td>
              <td>{code.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}