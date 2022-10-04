import React from 'react';
import { TodoItem } from './Item/Item';
import './TodoList.css';
const TodoList = ({ todos, onDeleteTodo, onToggleComplited }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => {
      return (
        <TodoItem
          key={id}
          id={id}
          completed={completed}
          text={text}
          onDeleteTodo={() => onDeleteTodo(id)}
          onToggleComplited={() => onToggleComplited(id)}
        />
      );
      // <li className="TodoList__item" key={id}>
      //   <input
      //     type="checkbox"
      //     className="TodoList__checkbox"
      //     checked={completed}
      //     onChange={() => onToggleComplited(id)}
      //   />
      //   <p className="TodoList__text">{text}</p>
      //   <button className="TodoList__btn" onClick={() => onDeleteTodo(id)}>
      //     Удалить
      //   </button>
      // </li>
    })}
  </ul>
);

export default TodoList;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import React from 'react';
// import './TodoList.css';

// const TodoList = ({ todos, onDeleteTodo }) => (
//   <ul className="TodoList">
//     {todos.map(({ id, text }) => (
//       <li key={id} className="TodoList__item">
//         <p className="TodoList__text">{text}</p>
//         <button onClick={() => onDeleteTodo(id)}>Удалить</button>
//       </li>
//     ))}
//   </ul>
// );

// export default TodoList;
