import { ErrorMessage, Field, Form } from 'formik';
import { styled } from 'styled-components';
export const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 0 40px -10px #000;
  /* margin: calc(50vh - 220px) auto; */
  padding: 20px 30px;
  /* width: calc(100vw - 40px); */
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;
export const StyledField = styled(Field)`
  width: 100%;
  height: 40px;
  display: block;
  margin: 0px auto 20px;
  font-size: 16px;
  border: none;
  background: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.textColor};

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.accentColor};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 18px;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 12px;
  color: red;
`;
export const StyledLable = styled.label`
  color: ${({ theme }) => theme.colors.textColor};
`;
