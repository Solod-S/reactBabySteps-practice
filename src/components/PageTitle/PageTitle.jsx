import PropTypes from 'prop-types';
import { Title } from './PageTitle.styled';

export const PageTitle = ({ text }) => <Title>{text}</Title>;

PageTitle.prototypes = {
  text: PropTypes.string.isRequired,
};
