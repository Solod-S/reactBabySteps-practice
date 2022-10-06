import React from 'react';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown/';
import TodoList from './components/TodoList';
import Form from './components/TodoList/Form';
import ColorPicker from './components/ColorPicker/ColorPicker';
import initialTodoes from './components/TodoList/initialTodoes.json';
import TodoEditor from './components/TodoEditor/TodoEditor';
import shortid from 'shortid';
import Filter from './components/TodoList/Filter/Filter';
import { LoginForm } from './components/LoginForm/LoginForm-FORMIC-YAP';
import { ProductReviewForm } from './components/ProductReviewForm/ProductReviewForm';
import Modal from './components/Modal/Modal';
import Clock from './components/Clock/Clock';
import Tabs from './components/Tabs/Tabs';
import tabs from './tabs.json';
import IconButton from './components/IconButton/IconButton';
import { ReactComponent as IconAdd } from '../src/icons/add.svg';
import { Player } from './components/Player/Player';
import { VideoList } from './components/VideoList/VideoList';
import videos from './videos.json';
import Reader from './components/Reader/Reader';
import publications from './publications.json';
import PokemonApp from './components/PokemonHttp/PokemonApp';
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends React.Component {
  state = {
    todos: initialTodoes,
    filter: '',
    showModal: false,
    selectedVideo: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const thisTodos = this.state.todos;
    const prevTodos = prevState.todos;
    if (thisTodos !== prevTodos) {
      // console.log(`!!Обновилось поле todos!!`);
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
    // console.log(`prevState`, prevState);
    // console.log(`currentState`, this.state);
    // if (
    //   this.state.todos.length !== prevState.todos.length &&
    //   this.state.todos.length !== 0
    // ) {
    //   this.toggleModal();
    // }
    // убираение окна добавления заметки если this.state.todos === []
  }
  componentDidMount() {
    const savedTodos = localStorage.getItem('todos');
    const parsedSavedTodos = JSON.parse(savedTodos);
    // console.log(parsedSavedTodos);
    if (parsedSavedTodos) {
      this.setState({
        todos: JSON.parse(savedTodos),
      });
    }
  }

  deleteTodo = todosId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todos => todos.id !== todosId),
    }));
  };
  cathDataFromEditor = text => {
    const newToDo = {
      id: shortid.generate(),
      text: text,
      completed: false,
    };
    this.setState(({ todos }) => ({ todos: [...todos, newToDo] }));
    this.toggleModal();
  };
  whenFormSubmited = data => {
    // console.log(data);
  };
  onTogleComplited = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };
  onChangeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getVisibleTodos = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    // console.log(
    //   this.state.todos.filter(todo =>
    //     todo.text.toLowerCase().includes(normalizedFilter),
    //   ),
    // );
    return this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };
  calculateComplitedTodos = () => {
    return this.state.todos.reduce(
      (total, todos) => (todos.completed ? total + 1 : total),
      0,
    );
  };
  // будем рендерить результат из этой функции по умоланию <TodoList todos = { this.getVisibleTodos }/>
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };
  render() {
    const { todos, filter, showModal } = this.state;
    // const completedTodos = todos.filter(todos => todos.completed).length;
    const completedTodos = this.calculateComplitedTodos();
    const vivibleTodos = this.getVisibleTodos();
    return (
      <>
        {showModal && (
          <Modal whenClose={this.toggleModal}>
            <Clock />

            <TodoEditor whenEditorSubmit={this.cathDataFromEditor}></TodoEditor>
            {/* <button type="button" onClick={this.toggleModal}>
              закрыть
            </button> */}
          </Modal>
        )}

        <Tabs items={tabs} />
        <ProductReviewForm></ProductReviewForm>

        <LoginForm></LoginForm>
        <h1>Состояние компонента</h1>
        <Counter initialValue={1} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <Form whenFormSubmited={this.whenFormSubmited} />
        <div>
          <p>Общее кол-во: {todos.length} </p>
          {/* <p>Кол-во оставшихся: {initialTodoes.length - todos.length} </p> */}
          <p>Кол-во выполненных: {completedTodos} </p>
        </div>
        <TodoList
          todos={vivibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleComplited={this.onTogleComplited}
        ></TodoList>
        <IconButton onClick={this.toggleModal} aria-label="Добавить заметку">
          <IconAdd width="20" height="20" fill="white"></IconAdd>
        </IconButton>
        <Filter value={filter} onChange={this.onChangeFilter} />
        <h1>Selected video: {this.state.selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo} />
        <Player url={this.state.selectedVideo} />
        <Reader items={publications} />
        <PokemonApp />
      </>
    );
  }
}

// const App = () => (
//   <>
//     {/* <h1>Состояние компонента</h1>
//     <Counter initialValue={1} />
//     <Dropdown />
//     <ColorPicker options={colorPickerOptions} /> */}
//     <TodoList></TodoList>
//   </>
// );
export default App;
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
// import React, { Component } from 'react';
// // import Counter from './components/Counter';
// // import Dropdown from './components/Dropdown';
// // import ColorPicker from './components/ColorPicker';
// import TodoList from './components/TodoList';
// import initialTodos from './todos.json';

// // const colorPickerOptions = [
// //   { label: 'red', color: '#F44336' },
// //   { label: 'green', color: '#4CAF50' },
// //   { label: 'blue', color: '#2196F3' },
// //   { label: 'grey', color: '#607D8B' },
// //   { label: 'pink', color: '#E91E63' },
// //   { label: 'indigo', color: '#3F51B5' },
// // ];

// class App extends Component {
//   state = {
//     todos: initialTodos,
//   };

//   deleteTodo = todoId => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== todoId),
//     }));
//   };

//   render() {
//     const { todos } = this.state;

//     const totalTodoCount = todos.length;
//     const completedTodoCount = todos.reduce(
//       (total, todo) => (todo.completed ? total + 1 : total),
//       0,
//     );

//     return (
//       <>
//         <h1>Состояние компонента</h1>

//         {/* <Counter initialValue={10} /> */}
//         {/* <Dropdown /> */}
//         {/* <ColorPicker options={colorPickerOptions} /> */}

//         <div>
//           <p>Общее кол-во: {totalTodoCount}</p>
//           <p>Кол-во выполненных: {completedTodoCount}</p>
//         </div>

//         <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
//       </>
//     );
//   }
// }

// export default App;
