// import { render } from '@testing-library/react';
import React from 'react';

import ControlsPanel from './Controls/ControlsPanel';
import ValueDisplay from './Controls/ValueDisplay';
import './Counter.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 0,
  //   };
  //   // состояние
  // }
  state = {
    value: this.props.initialValue,
  };
  handleIncrement = event => {
    console.log(`Up`);
    console.log(this);
    console.log(`event.target`, event.target);
    console.log(`event.type`, event.type);
    const target = event.target;
    setTimeout(() => {
      console.log(target);
    }, 1000);
    // чтобы работало в асинхроном коде event.. записываем в локальную переменную
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };
  //= () => публичное свойство класса чтобы работал this
  handleDecrement = event => {
    console.log(`Down`);
    console.log(`event.target`, event.target);
    console.log(`event.type`, event.type);
    const target = event.target;
    setTimeout(() => {
      console.log(target);
    }, 1000);
    // чтобы работало в асинхроном коде event.. записываем в локальную переменную

    this.setState(prevState => {
      if (this.state.value === 0) {
        return;
      }
      return { value: prevState.value - 1 };
    });
  };
  reset = event => {
    this.setState({ value: this.props.initialValue });
  };
  render() {
    return (
      <div className="Counter">
        <ValueDisplay value={this.state.value} />
        <ControlsPanel
          onHandleIncrement={this.handleIncrement}
          onHandleDecrement={this.handleDecrement}
          onReset={this.reset}
        />
        {/* <p className="Counter__value">{this.state.value}</p> */}
        {/* <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
          <button type="button" onClick={this.reset}>
            очистить
          </button>
        </div> */}
      </div>
    );
  }
}
export default Counter;
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
// import Controls from './Controls';
// import Value from './Value';
// import './Counter.css';

// class Counter extends Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   static propTypes = {
//     //
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   handleIncrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value + 1,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     const { value } = this.state;

//     return (
// <div className="Counter">
//   <Value value={value} />

//   <Controls
//     onIncrement={this.handleIncrement}
//     onDecrement={this.handleDecrement}
//   />
// </div>
//     );
//   }
// }

// export default Counter;
