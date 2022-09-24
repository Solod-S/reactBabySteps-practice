import { ButtonDefault } from './Button.styled';

export const ButtonComp = ({ icon = false, type = 'button', disabled = false, children }) => {
  // пропсы которые передаем и которые по умолнчанию
  return (
    <ButtonDefault type={type} disabled={disabled}>
      {icon}

      {children}
    </ButtonDefault>
  );
};
// под експорт иконок если передаем компонентом
export const Button = ({ icon: Icon = false, type = 'button', disabled = false, children }) => {
  // пропсы которые передаем и которые по умолнчанию
  return (
    <ButtonDefault type={type} disabled={disabled}>
      {Icon && <Icon size={22} />}

      {children}
    </ButtonDefault>
  );
};
