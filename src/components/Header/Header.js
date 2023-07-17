import { useLocation } from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';

function Header() {
  const [headerContainer, setHeaderContainer] = React.useState(<></>);
  const location = useLocation();

  function handleHeaderChange() {
    console.log(location.pathname);
    switch (location.pathname) {
      case '/movies':
        setHeaderContainer(
          <>
            <nav className="header__nav header__nav_type_logged">
              <NavLink to="/movies" className="header__nav-item">
                Фильмы
              </NavLink>
              <NavLink to="/savedmovies" className="header__nav-item">
                Сохранённые фильмы
              </NavLink>
            </nav>
            <NavLink to="/user" className="header__user-btn">
              Аккаунт
            </NavLink>
        </>
        );
        break;
      default:
        setHeaderContainer(
          <nav className="header__nav">
            <NavLink to="/Register" className="header__register-btn">
              Регистрация
            </NavLink>
            <NavLink to="/Login" className="header__login-btn">
              Войти
            </NavLink>
          </nav>
        );
    }
  }

  React.useEffect(() => {
    handleHeaderChange();
  }, [location.pathname]);

  return (
    <header className="header">
      <NavLink to="/" className="header__login">
        <Logo className="header__logo" />
      </NavLink>
      {headerContainer}
    </header>
  );
}

export default Header;
