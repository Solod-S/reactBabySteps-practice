import PropTypes from 'prop-types';
import css from 'components/PageTitle/PageTitle.module.css';

export const PageTitle = ({ text }) => <h1 className={css.title}>{text}</h1>;

PageTitle.prototypes = {
  text: PropTypes.string.isRequired,
};
