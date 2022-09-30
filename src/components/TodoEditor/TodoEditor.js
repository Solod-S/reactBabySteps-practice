import React from 'react';
import './TodoEditor.css';
class TodoEditor extends React.Component {
  state = {
    message: '',
  };
  handleChange = event => {
    this.setState({ message: event.currentTarget.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.whenEditorSubmit(this.state.message);
    this.setState({ message: '' });
  };
  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button className="TodoEditor__button" type="submit">
          Добавить
        </button>
      </form>
    );
  }
}

export default TodoEditor;
