import { useLocation } from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useResize } from '../../hooks/use-resize';

function Navigation({ onNav, loggedIn }) {
  const [navigationContainer, setNavigationContainer] = React.useState(<></>);
  const location = useLocation();
  const { width } = useResize();
  const setActive = ({isActive}) => isActive ? "navigation__item navigation__item_active" : "navigation__item"
  
  function handleNavigationChange() {
    if (loggedIn) {
      if (width > 800) {
        setNavigationContainer(
          <div className="navigation">
            <nav className="navigation__container navigation__container_type_logged">
              <NavLink className={setActive} to="/movies">
                Фильмы
              </NavLink>
              <NavLink  to="/saved-movies" className={setActive}>
                Сохранённые фильмы
              </NavLink>
            </nav>
            <NavLink  to="/profile" className="navigation__user-btn">
              Аккаунт
            </NavLink>
          </div>
        );
      } else {
        setNavigationContainer(
          <button onClick={onNav} className="hidden-navigation__btn"></button>
        );
      }
    } else {setNavigationContainer(
      <nav className="navigation__container">
        <NavLink  to="/Register" className="navigation__register-btn">
          Регистрация
        </NavLink>
        <NavLink  to="/Login" className="navigation__login-btn">
          Войти
        </NavLink>
      </nav>)}

  }

  React.useEffect(() => {
    handleNavigationChange();
  }, [loggedIn, width]);

  return navigationContainer;
}

export default Navigation;
