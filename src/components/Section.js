import PropTypes from 'prop-types';
// проверка передаваемых типов (тайпскрипт на минималках)
function Section({ title, children }) {
  console.log(title);
  return (
    <div>
      {title && <h2>{title}</h2>}
      {/* если title есть тогда рендерим */}
      {title && children}
      {/* если title есть тогда рендерим */}
    </div>
  );
}
Section.propTypes = {
  title: PropTypes.string,
  // тайтл должен бЫть строкой но не обязательно
  children: PropTypes.node,
  // дети должен может быть чем угодно
};
export default Section;
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

// import React from 'react';
// import PropTypes from 'prop-types';

// function Section({ title, children }) {
//   return (
//     <div>
//       {title && <h2>{title}</h2>}
//       {children}
//     </div>
//   );
// }

// Section.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.node,
// };

// export default Section;
