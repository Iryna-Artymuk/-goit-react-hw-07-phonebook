import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  gap: 10px;
  background: ${({ theme }) => theme.colors.background};

  @media only screen and (min-width: 620px) {
    flex-direction: row;
  }
`;

export const StyledList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media only screen and (min-width: 620px) {
    width: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
  }
  li {
  }
`;
export const StyledNavLink = styled(NavLink)`
  position: relative;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 3.3px;
  color: ${({ theme }) => theme.colors.textColor};
  &.active:before {
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: -5px;
    left: 0;
    border-radius: 3px;
    background: ${({ theme }) => theme.colors.accentColor};
  }
`;
