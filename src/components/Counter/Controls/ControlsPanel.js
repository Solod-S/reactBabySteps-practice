import React from 'react';

const ControlsPanel = ({ onHandleIncrement, onHandleDecrement, onReset }) => {
  return (
    <div className="Counter__controls">
      <button type="button" onClick={onHandleIncrement}>
        Увеличить на 1
      </button>
      <button type="button" onClick={onHandleDecrement}>
        Уменьшить на 1
      </button>
      <button type="button" onClick={onReset}>
        очистить
      </button>
    </div>
  );
};

export default ControlsPanel;
