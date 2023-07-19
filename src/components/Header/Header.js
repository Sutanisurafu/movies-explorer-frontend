import { useLocation } from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { useResize } from '../../hooks/use-resize';

function Header() {
  const [headerContainer, setHeaderContainer] = React.useState(<></>);
  const location = useLocation();
  const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();

   if (width < 800) {console.log("МЕНЯЕМ")}
  function handleHeaderChange() {
    switch (location.pathname) {
      case '/movies':
      case '/saved-movies':
      case '/profile':
        setHeaderContainer(
          <div className='header__container'>
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
        </div>
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
      <NavLink to="/" className="header__logo-link">
        <Logo className="header__logo" />
      </NavLink>
      {headerContainer}
    </header>
  );
}

export default Header;
