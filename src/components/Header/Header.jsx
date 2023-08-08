import React from 'react';
import { StyledHeader } from './StyledHeader';

// import Navigation from '../Navigation/Navigation'
// import { StyledContainer } from '../Layout/StyledLayout'

export default function Header({ children }) {
  return (
    <StyledHeader>
      <span> My contacts</span>
      {children}
    </StyledHeader>
  );
}
