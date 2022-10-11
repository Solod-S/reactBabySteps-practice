import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  componentDidMount() {
    // console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    console.log(event.code);
    if (event.code === 'Escape') {
      // console.log(`Escape нажали`);
      this.props.whenClose();
    }
  };
  handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.whenClose();
    }
  };
  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackDropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

// export default class Modal extends Component {
//   componentDidMount() {
//     console.log('Modal componentDidMount');
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     console.log('Modal componentWillUnmount');
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       console.log('Нажали ESC, нужно закрыть модалку');

//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = event => {
//     // console.log('Кликнули в бекдроп');

//     // console.log('currentTarget: ', event.currentTarget);
//     // console.log('target: ', event.target);

//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
//         <div className="Modal__content">{this.props.children}</div>
//       </div>,
//       modalRoot,
//     );
//   }
// }
