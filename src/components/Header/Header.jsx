import React from 'react';
import { StyledHeader, StyledList, StyledNavLink } from './StyledHeader';

// import Navigation from '../Navigation/Navigation'
// import { StyledContainer } from '../Layout/StyledLayout'

export default function Header({ children }) {
  return (
    <StyledHeader>
      <StyledList>
        <li>
          <StyledNavLink to="/">My Contacts</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/favouriteContacts">Favourite</StyledNavLink>
        </li>
      </StyledList>
      {children}
    </StyledHeader>
  );
}
