import React from 'react';
import './TodoList.css';
const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => {
      return (
        <li className="TodoList__item" key={id}>
          <p className="TodoList__text">{text}</p>
          <button onClick={() => onDeleteTodo(id)}>Удалить</button>
        </li>
      );
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
