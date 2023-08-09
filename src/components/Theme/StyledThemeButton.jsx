import { styled } from 'styled-components';

/* theme Button
 */
export const StyledThemeLabel = styled.label`
  width: 50px;
  height: 20px;
  position: absolute;
  top: 5px;
  right: 8px;
  display: block;
  background: linear-gradient(180deg, #777, #686767);
  border-radius: 200px;
  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4);
  cursor: pointer;
  z-index: 100;

  &:after {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0px;
    left: 2px;
    background: ${({ theme }) => theme.colors.accentColor};
    border-radius: 50%;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);

    &:after {
      transition: 0.3s;
    }
    &:active:after {
      width: 30px;
    }
  }

  svg {
    position: absolute;
    width: 20px;
    /* top: -15px;
   right: 28px; */
    z-index: 100;
  }
  svg.moon {
    /* left:40px; */
    top: -15px;
    left: 28px;

    fill: #7e7e7e;
    transition: 0.3s;
  }
  svg.sun {
    top: -15px;
    right: 28px;
    fill: #fff;
    font-weight: 700;
    transition: 0.3s;
  }
`;

export const StyledThemeInput = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;

  &:checked + label {
    background: #dcd8d8;
  }
  &:checked + label:after {
    left: 48px;
    transform: translateX(-100%);
  }

  &:checked + label svg.moon {
    fill: #fff;
  }
  &:checked + label svg.sun {
    fill: #7e7e7e;
  }
`;
