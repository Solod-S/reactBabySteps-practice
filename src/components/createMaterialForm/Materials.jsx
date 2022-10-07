import React from 'react';
import { MaterialItem } from './materialItem';
export const Materials = ({ materials, ...otherProps }) => {
  return (
    <ul>
      {materials.map(materil => (
        <li key={materil.id}>
          <MaterialItem
            title={materil.title}
            material={materil.link}
            id={materil.id}
            {...otherProps}
            // функции
          />
        </li>
      ))}
    </ul>
  );
};
