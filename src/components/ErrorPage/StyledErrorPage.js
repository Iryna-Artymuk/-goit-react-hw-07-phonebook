import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  /* width: 100vw; */
  height: 100%;
  text-align: center;
  margin: 0 auto 0;
  background: ${({ theme }) => theme.colors.accentColor};

  p {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: ${({ theme }) => theme.colors.textColor};
    font-size: 30px;
    animation: type 0.5s alternate infinite;
  }
`;
