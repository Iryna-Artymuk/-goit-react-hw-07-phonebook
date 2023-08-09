import { styled } from 'styled-components';

// export const StyledWrraper = styled.div`
//   width: 70%;

//   span {
//     font-size: 20px;
//     font-weight: 700;
//     color: ${({ theme }) => theme.colors.textColor};

//     /* &:hover {
//       color: ${({ theme }) => theme.colors.hovertextColor};
//     } */
//   }
// `;

export const OptionsList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 400px) {
    justify-content: flex-start;
  }
  @media only screen and (min-width: 620px) {
    width: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
  }
`;
// export const Styledspan = styled.span`

//   border-radius: 10px;
//   padding: 10px 10px;
// border-radius:50px;
//   text-align: center;

//   background:${({ theme }) => theme.colors.accentColor};
//   color:${({ theme }) => theme.colors.textColor};

//   &:hover {
//     color: ${({ theme }) => theme.colors.hovertextColor};
//   }
/* &.active:before {
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: -5px;
    left: 0;
    border-radius: 3px;
    background: ${({ theme }) => theme.colors.primary_color};
  } */
/* &.active {
    display: inline-block;
    pointer-events: none;
    /* opacity: 0.5; */
/* } */
