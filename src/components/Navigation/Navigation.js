import { useLocation } from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useResize } from '../../hooks/use-resize';

function Navigation({ onNav, loggedIn }) {
  const [navigationContainer, setNavigationContainer] = React.useState(<></>);
  const location = useLocation();
  const { width } = useResize();

  
  function handleNavigationChange() {
    console.log(loggedIn)
    if (loggedIn) {
      if (width > 800) {
        setNavigationContainer(
          <div className="navigation">
            <nav className="navigation__container navigation__container_type_logged">
              <NavLink to="/movies" className="navigation__item">
                Фильмы
              </NavLink>
              <NavLink to="/saved-movies" className="navigation__item">
                Сохранённые фильмы
              </NavLink>
            </nav>
            <NavLink to="/profile" className="navigation__user-btn">
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
        <NavLink to="/Register" className="navigation__register-btn">
          Регистрация
        </NavLink>
        <NavLink to="/Login" className="navigation__login-btn">
          Войти
        </NavLink>
      </nav>)}

    // switch (location.pathname) {
    //   case '/movies':
    //   case '/saved-movies':
    //   case '/profile':
    //     if (width > 800) {
    //       setNavigationContainer(
    //         <div className="navigation">
    //           <nav className="navigation__container navigation__container_type_logged">
    //             <NavLink to="/movies" className="navigation__item">
    //               Фильмы
    //             </NavLink>
    //             <NavLink to="/saved-movies" className="navigation__item">
    //               Сохранённые фильмы
    //             </NavLink>
    //           </nav>
    //           <NavLink to="/profile" className="navigation__user-btn">
    //             Аккаунт
    //           </NavLink>
    //         </div>
    //       );
    //     } else {
    //       setNavigationContainer(
    //         <button onClick={onNav} className="hidden-navigation__btn"></button>
    //       );
    //     }
    //     break;
    //   default:
        // setNavigationContainer(
        //   <nav className="navigation__container">
        //     <NavLink to="/Register" className="navigation__register-btn">
        //       Регистрация
        //     </NavLink>
        //     <NavLink to="/Login" className="navigation__login-btn">
        //       Войти
        //     </NavLink>
        //   </nav>
        // );
    // }
  }

  React.useEffect(() => {
    handleNavigationChange();
  }, [location.pathname, width]);

  return navigationContainer;
}

export default Navigation;
