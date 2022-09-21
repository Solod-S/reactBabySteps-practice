import React from 'react';
// чтобы работал React.createElement (который как оказывается нам не нужен  мы используем jsx)
import ReactDOM from 'react-dom';
// дефолтный експорт реакта
// import paintings from './paintings.json';
// // импорт массива с даннЫми
import App from './App';
// главный компонент в котором все рендериться
// // const element = React.createElement('div', { type: 'text' }, 'Текстовое поле');
// //===
// const elem1 = React.createElement('span', { children: 'Привет' });
// const elem2 = React.createElement('span', { children: 'Мир' });
// const element = React.createElement('div', {
//   type: 'text',
//   children: [elem1, ' ', elem2],
// });
// // {атрибуты + children то что между открывающим и закрывающим тегом}
// console.log(element);
// // переписываем на JSX
// //
// //
// const jsxElem1 = <div type="text">Привет</div>;
// const jsxElem2 = <div type="text">Мир</div>;
// const jsxElement = (
//   <div type="text">
//     {jsxElem1}
//     {jsxElem2}
//   </div>
// );
// console.log(jsxElement);

// //
// //
// //
// //
// ReactDOM.render(jsxElement, document.querySelector('#root'));
//рендерим разметку (что ремндери, куда рендерим)
//реакатовский анало document.createElement, создаем реакт елемент

// const data = paintings[0];

// const painting = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Автор: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Цена: {data.price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );
// ReactDOM.render(painting, document.querySelector('#root'));
//
//
//================= ДЕЛАЕМ КОМПОНЕНТ
//
//
// const painting = paintings[0];
// function Painting(props) {
//   console.log(props);
//   const { url, title, authorName, authorUrl } = props;
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Автор: <a href={authorUrl}>{authorName}</a>
//       </p>
//       <p>Цена: кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>

//   );
// }
// ReactDOM.render(
//   <Painting type="text" number={13} array={{ how: 'obj' }} />,
//   document.querySelector('#root'),
// );
// как передавать разные пропсы
// ReactDOM.render(
//   <Painting
//     url={painting.url}
//     title={painting.title}
//     authorName={painting.author.tag}
//     authorUrl={painting.author.url}
//   />,
//   document.querySelector('#root'),
// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
// <React.StrictMode>
//   <App />
// </React.StrictMode>,
//   document.getElementById('root'),
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);
