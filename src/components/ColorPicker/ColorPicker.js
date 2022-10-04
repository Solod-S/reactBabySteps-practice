import React from 'react';
import './ColorPicker.css';
import classNames from 'classnames';

class ColorPicker extends React.PureComponent {
  state = {
    activeOptionIdx: 0,
  };
  makeOptionClasses = index => {
    return classNames(`ColorPicker__option`, {
      'ColorPicker__option--active': index === this.state.activeOptionIdx,
    });
  };
  // c classNames
  //
  // makeOptionClasses = index => {
  //   const optionClasses = [`ColorPicker__option`];
  //   if (index === this.state.activeOptionIdx) {
  //     optionClasses.push('ColorPicker__option--active');
  //   }
  //   return optionClasses.join(' ');
  // };
  // без classNames
  setIndex = index => {
    this.setState({ activeOptionIdx: index });
  };
  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const activeColor = options[activeOptionIdx].label;
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Активный цвет: {activeColor}</p>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={this.makeOptionClasses(index)}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => this.setIndex(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ColorPicker;
// import React, { Component } from 'react';
// import './ColorPicker.css';

// class ColorPicker extends Component {
//   state = {
//     activeOptionIdx: 0,
//   };

//   setActiveIdx = index => {
//     this.setState({ activeOptionIdx: index });
//   };

//   makeOptionClassName = index => {
//     const optionClasses = ['ColorPicker__option'];

//     if (index === this.state.activeOptionIdx) {
//       optionClasses.push('ColorPicker__option--active');
//     }

//     return optionClasses.join(' ');
//   };

//   render() {
//     const { activeOptionIdx } = this.state;
//     const { options } = this.props;
//     const { label } = options[activeOptionIdx];

//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <p>Выбран цвет: {label}</p>
//         <div>
//           {options.map(({ label, color }, index) => (
//             <button
//               key={label}
//               className={this.makeOptionClassName(index)}
//               style={{ backgroundColor: color }}
//               onClick={() => this.setActiveIdx(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default ColorPicker;
