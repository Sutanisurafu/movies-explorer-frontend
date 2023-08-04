import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header({ onNav, loggedIn }) {

  return (
    <header className="header">
      <NavLink to="/" className="header__logo-link">
        <Logo className="header__logo" />
      </NavLink>
      <Navigation loggedIn={loggedIn} onNav={onNav} />
    </header>
  );
}

export default Header;
