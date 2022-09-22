import React from 'react';
import ReactDom from 'react-dom';
import { App } from 'components/App/App';
// именнованный импорт
import './index.css';
// импорт css переменных
import { ThemeProvider } from '@emotion/react';
// импорт темы https://emotion.sh/
import { theme } from './constants';
//импорт настроек темы для  https://emotion.sh/

// const theme = {
//   colors: {
//     white: '#ffffff',
//     black: '#010101',
//     green: '#4caf50',
//     red: '#f44336',
//     blue: '#2196f3',
//     primaryText: '#212121',
//     secondaryText: '#757575',
//   },
// };
// мы берем с константы (импорт)
ReactDom.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* обварачиваем в тему и в ней передаем цвета (пропсами) */}
      <App />
    </ThemeProvider>
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
