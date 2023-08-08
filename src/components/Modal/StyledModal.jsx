import { styled } from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50vw;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 600px) {
    & {
      width: 80vw;
    }
  }
  /* height: auto; */
  height: 60vh;
  object-fit: contain;

  border-radius: 5px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  background: ${({ theme }) => theme.colors.accentColor};
`;

export const ContentWrraper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  padding: 3px;
`;
