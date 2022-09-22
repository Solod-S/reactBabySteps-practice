import styled from '@emotion/styled';

export const EventCard = styled.div`
  position: relative;
  border: 2px dashed black;
  border: ${props => `2px dashed ${props.theme.colors.black}`};
  // через тему делаем цвет
  padding: ${props => props.theme.spacing(4)};
  // через тему делаем падинг
`;
export const EventTitle = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
export const EventInfo = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: var(--color-primary-text);
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;
  cursor: pointer;
  transition: color 250ms linear;
  :hover,
  :hover svg {
    color: red;
    fill: red;
  }
  svg {
    display: block;
    margin-right: 8px;
    color: var(--color-secondary-text);
    transition: fill 250ms linear;
  }
  // то что было в отдельном классе сделали во вложености
  //// .icon {
  //   display: block;
  //   margin-right: 8px;
  //   color: var(--color-secondary-text);
  // }
`;
export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: #000;
  color: #fff;
  background-color: ${({ eventType, theme }) => {
    switch (eventType) {
      case 'free':
        return theme.colors.green;
      case 'paid':
        return theme.colors.blue;
      case 'vip':
        return theme.colors.red;
      default:
        return theme.colors.black;
    }
    //
    // ИСПОЛЬЗУЯ ТЕМЫ
    // background-color: ${props => {
    //   switch (props.EventType) {
    //     case 'free':
    //       return 'var(--color-green)';
    //     case 'paid':
    //       return 'var(--color-blue)';
    //     case 'vip':
    //       return 'var(--color-red)';
    //     default:
    //       return '#000';
    //   }
    // НЕ ИСПОЛЬЗУЯ ТЕМЫ
    // получаем проптайпы и с помощи функции понимаем что нам нужно
  }};
`;
