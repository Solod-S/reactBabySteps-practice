import React from 'react';

const Controls = ({ onPrevClick, onNextClick, index, totalItems }) => {
  return (
    <section>
      <button type="button" disabled={index === 0} onClick={onPrevClick}>
        Назад
      </button>
      <button
        type="button"
        disabled={index + 1 === totalItems}
        onClick={onNextClick}
      >
        Вперед
      </button>
    </section>
  );
};

export default Controls;
