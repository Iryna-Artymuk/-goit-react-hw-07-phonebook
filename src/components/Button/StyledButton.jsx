import { styled } from 'styled-components';

export const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.accentColor};
  border-radius: 8px;
  margin: auto;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textColor};
  &:hover {
    color: ${({ theme }) => theme.colors.hoverTextColor};
  }
  svg {
    display: inline-block;
    /* width: 2em;
    height: 2em; */
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }
  svg :hover,
  svg :focus {
    stroke: currentColor;
    fill: currentColor;
  }
`;

export const IconButton = styled(StyledButton)`
  position: relative;
  /* width: 3em;
  height: 3em; */
  border-radius: 50%;
  margin: 0;
`;
export const CloseButton = styled(StyledButton)`
  position: absolute;
  top: 3px;
  right: 3px;
  margin: 0;
  width: 3em;
  height: 3em;
  background: transparent;
`;
