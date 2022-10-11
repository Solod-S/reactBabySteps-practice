import React from 'react';
import './Filter.css';
const Filter = ({ value, onChange }) => {
  return (
    <div className="TodoFilter">
      <label className="TodoFilter__label ">
        Фильтр по имени
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="TodoFilter__input "
        ></input>
      </label>
    </div>
  );
};
export default Filter;
