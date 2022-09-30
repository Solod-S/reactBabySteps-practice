import React from 'react';

import shortid from 'shortid';
class Form extends React.Component {
  nameId = shortid.generate();
  surNameId = shortid.generate();
  // если нужен id лейблу
  state = {
    name: '',
    surName: '',
    level: 'junior',
    license: false,
  };
  handlleLicenseChange = event => {
    console.log(event.currentTarget.checked);
    this.setState({ license: event.currentTarget.checked });
  };
  handlleChange = event => {
    const { name, value } = event.currentTarget;
    console.log((`name: `, name));
    console.log((`value: `, value));
    this.setState({ [name]: value });
    // this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  handlleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.whenFormSubmited(this.state);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      name: '',
      surName: '',
      level: 'junior',
      license: false,
    });
  };
  render() {
    const { name, surName } = this.state;
    return (
      <form onSubmit={this.handlleSubmit}>
        <label htmlFor={this.nameId}>
          Имя
          <input
            id={this.nameId}
            type="text"
            name="name"
            value={name}
            onChange={this.handlleChange}
          ></input>
        </label>
        <label htmlFor={this.surNameId}>
          Фамилия
          <input
            id={this.surNameId}
            type="text"
            name="surName"
            value={surName}
            onChange={this.handlleChange}
          ></input>
        </label>
        <p>Ваш уроверь:</p>

        <label>
          <input
            type="radio"
            name="level"
            value="junior"
            onChange={this.handlleChange}
            checked={this.state.level === 'junior'}
          ></input>
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="level"
            value="middle"
            onChange={this.handlleChange}
            checked={this.state.level === 'middle'}
          ></input>
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="level"
            value="senior"
            onChange={this.handlleChange}
            checked={this.state.level === 'senior'}
          ></input>
          Senior
        </label>
        <label>
          <input
            type="checkbox"
            name="license"
            checked={this.state.license}
            onChange={this.handlleLicenseChange}
          ></input>
          Согласен работать за еду
        </label>
        <button type="submit" disabled={!this.state.license}>
          Отправить
        </button>
      </form>
    );
  }
}
export default Form;
