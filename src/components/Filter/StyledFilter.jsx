import { styled } from 'styled-components';

export const StyledFilter = styled.input`
  width: 70%;
  height: 40px;
  display: block;
  padding: 0 10px 0 10px;
  margin: 0 auto 20px;
  font-size: 18px;
  background: none;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.textColor};

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.accentColor};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 18px;
  }
`;
