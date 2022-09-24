// import styled from '@emotion/styled';
import styled from 'styled-components';
export const ButtonDefault = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  // :disabled {
  //   background-color: ${p => p.theme.colors.secondaryText};
  // }
  // можно так
  background-color: ${p => (p.disabled ? p.theme.colors.secondaryText : p.theme.colors.blue)};
  // если кнопка disabled цвет фона серый если нет то серый (через тернарник)
  // background-color: ${p => p.theme.colors.blue};
  cursor: pointer;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};

  border-radius: ${p => p.theme.radii.normal};
  transition: background-color 250ms linear;
  :not(:last-child) {
    margin-right: ${p => p.theme.space[2]}px;
  }
  :hover:not(:disabled) {
    background-color: ${p => p.theme.colors.red};
  }
`;
