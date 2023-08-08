import React from 'react';
import { StyledContainer } from './StyledLayout';


// import ChangeThemeButton from 'components/Theme/TheamButton';
// console.log('ChangeThemeButton : ', ChangeThemeButton);

function Layout({ children, HandleThemeChange }) {
  return (
    <StyledContainer>
      {children}

    </StyledContainer>
  );
}

export default Layout;
