import React, { useState } from 'react';
import Checklist from './Checklist';

export default function MaintenanceSchedule() {
  const dailyItems = [
    "Guardar y respaldar trabajo.",
    "Cerrar programas correctamente.",
    "Limpiar área de trabajo."
  ];

  const weeklyItems = [
    "Limpieza externa.",
    "Verificar actualizaciones.",
    "Escaneo antivirus rápido."
  ];

  const monthlyItems = [
    "Limpieza interna.",
    "Liberar espacio en disco.",
    "Verificar estado de discos."
  ];

  // ✔ ESTADOS REALES PARA CADA CHECKLIST
  const [dailyState, setDailyState] = useState(Array(dailyItems.length).fill(false));
  const [weeklyState, setWeeklyState] = useState(Array(weeklyItems.length).fill(false));
  const [monthlyState, setMonthlyState] = useState(Array(monthlyItems.length).fill(false));

  const progress = (arr) =>
    (arr.filter(Boolean).length / arr.length) * 100;

  return (
    <div className="maintenance-schedule">

      {/* 🔹 DIARIO */}
      <div className="schedule-category">
        <h3>📅 Diario</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress(dailyState)}%` }}></div>
        </div>

        <Checklist
          checkedItems={dailyState}
          onToggle={(i, val) => {
            const newArr = [...dailyState];
            newArr[i] = val;
            setDailyState(newArr);
          }}
        >
          {dailyItems.map((item, index) => (
            <Checklist.Item key={index}>{item}</Checklist.Item>
          ))}
        </Checklist>
      </div>


      {/* 🔹 SEMANAL */}
      <div className="schedule-category">
        <h3>📊 Semanal</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress(weeklyState)}%` }}></div>
        </div>

        <Checklist
          checkedItems={weeklyState}
          onToggle={(i, val) => {
            const newArr = [...weeklyState];
            newArr[i] = val;
            setWeeklyState(newArr);
          }}
        >
          {weeklyItems.map((item, index) => (
            <Checklist.Item key={index}>{item}</Checklist.Item>
          ))}
        </Checklist>
      </div>


      {/* 🔹 MENSUAL */}
      <div className="schedule-category">
        <h3>📈 Mensual</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress(monthlyState)}%` }}></div>
        </div>

        <Checklist
          checkedItems={monthlyState}
          onToggle={(i, val) => {
            const newArr = [...monthlyState];
            newArr[i] = val;
            setMonthlyState(newArr);
          }}
        >
          {monthlyItems.map((item, index) => (
            <Checklist.Item key={index}>{item}</Checklist.Item>
          ))}
        </Checklist>
      </div>

    </div>
  );
}
