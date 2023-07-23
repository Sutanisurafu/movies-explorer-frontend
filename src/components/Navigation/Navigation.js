import { useLocation } from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useResize } from '../../hooks/use-resize';

function Navigation({ onNav }) {
  const [navigationContainer, setNavigationContainer] = React.useState(<></>);
  const location = useLocation();
  const { width } = useResize();

  
  function handleNavigationChange() {
    switch (location.pathname) {
      case '/movies':
      case '/saved-movies':
      case '/profile':
        if (width > 800) {
          setNavigationContainer(
            <div className="navigation">
              <nav className="navigation__container navigation__container_type_logged">
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
        } else {
          setNavigationContainer(
            <button onClick={onNav} className="hidden-navigation__btn"></button>
          );
        }
        break;
      default:
        setNavigationContainer(
          <nav className="navigation__container">
            <NavLink to="/Register" className="header__register-btn">МЕП/р
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
    handleNavigationChange();
  }, [location.pathname, width]);

  return navigationContainer;
}

export default Navigation;
