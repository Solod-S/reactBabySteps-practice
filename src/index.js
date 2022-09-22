import React from 'react';
import ReactDom from 'react-dom';
import { App } from 'components/App/App';
// именнованный импорт
import './index.css';
// импорт css переменных

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

//
//
//
//
//
//
//

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { ThemeProvider } from '@emotion/react';
// import './index.css';
// import { App } from 'components/App/App';
// import { theme } from './constants';

// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
