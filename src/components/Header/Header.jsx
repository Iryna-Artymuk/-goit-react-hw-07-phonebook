import React from 'react';
import { StyledHeader } from './StyledHeader';
import { NavLink } from 'react-router-dom';

// import Navigation from '../Navigation/Navigation'
// import { StyledContainer } from '../Layout/StyledLayout'

export default function Header({ children }) {
  return (
    <StyledHeader>
     <ul>
        <li>
          <NavLink to="/">My Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/favouriteContacts">Favourite</NavLink>
        </li>
      </ul>
      {children}
    </StyledHeader>
  );
}
