import paintingsData from './paintings.json';
// импорт массива с даннЫми
import Painting from './components/Painting';
//импортируем компонент карточки пользователя
import PaintingList from './components/PaintingList';
//импортируем компонент генерации карточек пользователей
import Section from './components/Section';
//импортируем компонент генерации секции
export default function App() {
  // const isOnline = false;
  // репндер по условию (false null undefined в реакте не рендериться)
  //&& - логическое И
  //? тернарник
  //?? =======> painting.url ?? "Картинка не доступа" (если painting.url === null тогда будет строка "Картинка не доступа"  )
  // в том случае когда слева приводиться к false мы возвращаем то что справа
  // true && 2 / => вернет 2
  // false && 2 / => вернет false
  // 0 && 2 / => вернет 0
  // true || 1 => вернет true
  // false || 1 => true 1
  return (
    <div>
      {/* <PaintingList items={paintingsData} /> */}
      <Section title="Товар недели">
        <PaintingList items={paintingsData} />
      </Section>
      <Section>
        {' '}
        <PaintingList items={paintingsData} />
      </Section>
      {/* композиция (открывающий + закрывающий компонент + внутри вложенный
      компонент (children)) */}
    </div>
  );
  // передаем компонент PaintingList и пропс с нашими данными
  // <div>
  //   {paintingsData.map(painting => (
  //     <Painting
  //       key={painting.id}
  //       // уникальный ключ индификатор который нужен реакту
  //       url={painting.url}
  //       title={painting.title}
  //       authorName={painting.author.tag}
  //       authorUrl={painting.author.url}
  //       price={painting.price}
  //       quantity={painting.quantity}
  //     />
  //   ))}
  // </div>
  //{} jsx выражение
  // перебираем входящие данные мепом и на каждой итерации возвращаем компонент с указаными пропсами
  // <div>
  //   {isOnline && 'Online'}
  //   {/* // если isOnline === true рендерим 'Online' */}
  //   {isOnline ? 'Online' : 'Offline'}
  //   {/* // если isOnline === true рендерим 'Online' или если isOnline === false рендерим 'Offline' */}
  // </div>

  // <div>
  //   <Painting
  //     url={paintingsData[0].url}
  //     title={paintingsData[0].title}
  //     authorName={paintingsData[0].author.tag}
  //     authorUrl={paintingsData[0].author.url}
  //     price={paintingsData[0].price}
  //     quantity={paintingsData[0].quantity}
  //   />
  //   {/* // елемен Painting + пропсы (настройки) кладем внутрь компанента*/}
  //   <Painting
  //     url={paintingsData[1].url}
  //     title={paintingsData[1].title}
  //     authorName={paintingsData[1].author.tag}
  //     authorUrl={paintingsData[1].author.url}
  //     price={paintingsData[1].price}
  //     quantity={paintingsData[1].quantity}
  //   />
  //   {/* // елемен Painting + пропсы (настройки) кладем внутрь компанента*/}
  //   <Painting
  //     url={paintingsData[2].url}
  //     title={paintingsData[2].title}
  //     authorName={paintingsData[2].author.tag}
  //     authorUrl={paintingsData[2].author.url}
  //     price={paintingsData[2].price}
  //     quantity={paintingsData[2].quantity}
  //   />
  //   {/* // елемен Painting + пропсы (настройки) кладем внутрь компанента*/}
  // </div>
}

// import PaintingList from './components/PaintingList';
// import Section from './components/Section';
// import paintings from './paintings.json';

// export default function App() {
//   return (
//     <div>
//       <Section title="Топ недели">
//         <PaintingList items={paintings} />
//       </Section>

//       <Section title="Лучшее"></Section>
//     </div>
//   );
// }
