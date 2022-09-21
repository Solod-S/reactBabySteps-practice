import PropTypes, { object } from 'prop-types';
import Painting from './Painting';

function PaintingList({ items }) {
  console.log(items);
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            {/* // уникальный ключ индификатор который нужен реакту СТАВИМ НА САМЫЙ ВЕРХНИЙ УРОВЕНЬ*/}
            <Painting
              url={item.url}
              title={item.title}
              authorName={item.author.tag}
              authorUrl={item.author.url}
              price={item.price}
              quantity={item.quantity}
            />
          </li>
        );
      })}
    </ul>
  );
}
export default PaintingList;
PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  // проверяем что мы получаем массив с обьектами, в каждом объекте есть ключ id и свойство строка
};
//обьявляю елементу Painting PropTypes и в объекте описываю типы передаваеммых пропсов
//
//
//

// import Painting from './Painting';
// import PropTypes from 'prop-types';

// function PaintingList({ items }) {
//   return (
//     <ul>
//       {items.map(item => (
//         <li key={item.id}>
//           <Painting
//             imageUrl={item.url}
//             title={item.title}
//             author={item.author.tag}
//             profileUrl={item.author.url}
//             price={item.price}
//             quantity={item.quantity}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }

// PaintingList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   ),
// };

// export default PaintingList;
