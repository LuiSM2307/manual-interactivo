import React, { useState, useEffect } from "react";

/* Item: recibe props checked y onChange (o funciona por defecto) */
function ChecklistItem({ children, checked = false, onChange = () => {} }) {
  return (
    <div className="checklist-item">
      <label className="checklist-label">
        <input
          type="checkbox"
          checked={!!checked}
          onChange={(e) => onChange(e.target.checked)}
          className="checklist-input"
        />
        <span className={`checklist-text ${checked ? "checked" : ""}`}>
          {children}
        </span>
      </label>
    </div>
  );
}

/*
  Checklist principal:
  - Si el prop checkedItems NO se pasa -> usa estado local (uncontrolled mode).
  - Si se pasa -> funciona en modo controlado y llama a onToggle para notificar cambios.
*/
export default function Checklist({ children, checkedItems, onToggle }) {
  const childrenArray = React.Children.toArray(children);

  // Si checkedItems es undefined, usaremos estado interno
  const isControlled = Array.isArray(checkedItems);

  // estado local para modo no-controlado
  const [localState, setLocalState] = useState(
    () => childrenArray.map(() => false)
  );

  // Si cambió el número de hijos, sincronizamos el localState
  useEffect(() => {
    if (!isControlled) {
      setLocalState((prev) => {
        const next = childrenArray.map((_, i) => prev[i] ?? false);
        return next;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [childrenArray.length]);

  // handler cuando un item cambia
  function handleToggle(i, val) {
    if (isControlled) {
      // Llamamos al padre si nos lo brinda
      if (typeof onToggle === "function") onToggle(i, val);
    } else {
      // Actualizamos estado local
      setLocalState((prev) => {
        const copy = [...prev];
        copy[i] = val;
        return copy;
      });
    }
  }

  // Elegimos la fuente de checked para cada hijo
  const currentState = isControlled ? checkedItems : localState;

  return (
    <div className="checklist">
      {childrenArray.map((child, i) =>
        React.cloneElement(child, {
          checked: !!currentState[i],
          onChange: (val) => handleToggle(i, val),
          key: child.key ?? i
        })
      )}
    </div>
  );
}

/* Exponer Item como subcomponente */
Checklist.Item = ChecklistItem;
