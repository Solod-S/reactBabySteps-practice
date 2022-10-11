import React from 'react';
import '../TodoList.css';
import { ReactComponent as DellIcon } from '../../../icons/delete.svg';
export const TodoItem = ({
  id,
  completed,
  text,
  onToggleComplited,
  onDeleteTodo,
}) => {
  return (
    <li className="TodoList__item">
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={onToggleComplited}
      />
      <p className="TodoList__text">{text}</p>
      <button className="TodoList__btn" onClick={onDeleteTodo}>
        Удалить <DellIcon width="22" fill="white" />
      </button>
    </li>
  );
};
