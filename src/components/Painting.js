import PropTypes from 'prop-types';
// проверка передаваемых типов (тайпскрипт на минималках)
import defaulImg from './default.jpg';
// импортируем дефолтный путь к нашей картинке
console.log(defaulImg);
export default function Painting(props) {
  // console.log(props);
  const {
    url = defaulImg,
    title,
    authorName,
    authorUrl,
    price = 0,
    quantity,
  } = props;
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorName}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity >= 10 ? 'есть в наличии' : 'заканчивается'}</p>
      {/* тернарник по которому рендерим есть в наличии или заканчивается */}
      <button type="button">Добавить в корзину</button>
    </div>
  );
}
Painting.propTypes = {
  url: PropTypes.string.isRequired,
  // должна быть строка
  title: PropTypes.string.isRequired,
  // должна быть строка
  authorUrl: PropTypes.string.isRequired,
  // должна быть строка
  authorName: PropTypes.string.isRequired,
  // должна быть строка
  price: PropTypes.number,
  // должна быть число
  quantity: PropTypes.number,
  // должна быть число
};
//обьявляю елементу Painting PropTypes и в объекте описываю типы передаваеммых пропсов
//
//
//

// import PropTypes from 'prop-types';
// import defaultImage from './default.jpg';

// const Painting = ({
//   imageUrl = defaultImage,
//   title,
//   profileUrl,
//   author = 'не известно',
//   price,
//   quantity,
// }) => {
//   return (
//     <div>
//       <img src={imageUrl} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Автор: <a href={profileUrl}>{author}</a>
//       </p>
//       <p>Цена: {price} кредитов</p>
//       <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   );
// };

// Painting.propTypes = {
//   imageUrl: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   profileUrl: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   quantity: PropTypes.number.isRequired,
// };

// export default Painting;
