import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  height: 80px;
  align-items: flex-end;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  background: ${({ theme }) => theme.colors.background};
  @media only screen and (max-width: 450px) {
    display: block;
    justify-content: space-between;
    text-align: center;
  }
  span {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 3.3px;
    color: ${({ theme }) => theme.colors.textColor};
    @media only screen and (max-width: 450px) {
      display: inline-block;
      margin-bottom: 5px;
    }
  }
`;
