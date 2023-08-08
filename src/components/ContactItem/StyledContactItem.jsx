import { styled } from 'styled-components';
import avatar from '../../img/avatar.jpg';

export const Card = styled.div`
  --size: 250px;
  width: var(--size);
  height: var(--size);
  background: ${({ theme }) => theme.colors.background};
  padding: 10px;
  border-radius: 20px;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const CardInfo = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

// name and phone
export const CardTitle = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.5em;
  font-weight: 500;
  line-height: 2rem;
  text-align: center;
`;

export const CardSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1em;
  font-weight: 500;
  line-height: 1rem;
  text-align: center;
`;
/*Image*/
export const CardAvatar = styled.div.attrs(props => ({
  style: {
    backgroundImage: `url(${props.avatar || avatar})`,
    backgroundSize: 'cover',
  },
}))`
  --size: 100px;

  width: var(--size);
  height: var(--size);
  border-radius: 50%;
`;

// buttons
export const Options = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`;

export const StyledInput = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;

  &:checked + label svg {
    fill: ${({ theme }) => theme.colors.hoverTextColor};
  }
  &:hover + label svg {
    fill: ${({ theme }) => theme.colors.hoverTextColor};
  }
`;

export const StyledLabel = styled.label`
  position: relative;
  margin: 0;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.accentColor};
  border-radius: 50%;
  text-align: center;
  &:hover {
    /* background: ${({ theme }) => theme.colors.textColor}; */
    /* input[title] {
      visibility: visible;
    } */
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    fill: ${({ theme }) => theme.colors.textColor};
  }
  cursor: pointer;
  input {
    width: 0;
    height: 0;
    visibility: hidden;

    &:checked + svg {
      fill: ${({ theme }) => theme.colors.hoverTextColor};
    }
  }
`;
