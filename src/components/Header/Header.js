import { useLocation } from "react-router-dom";
import React from "react";
import { NavLink } from "react-router-dom";


function Header () {
  const [headerContainer, setHeaderContainer] = React.useState(<></>);
  const location = useLocation();
  
  function handleHeaderChange() {
    console.log(location.pathname)
    switch (location.pathname) {
      case "/register":
        setHeaderContainer(
          <div className="header__container">
            <NavLink
              to="/Register"
              className="header__login"
            >
              Регистрация
            </NavLink>
            <NavLink
              to="/Login"
              className={"header__register"}
            >
              Войти
            </NavLink>
          </div>
        );
        break;
        default:
          setHeaderContainer(
            <div className="header__container">
              <NavLink
                to="/Register"
                className="header__register-btn"
              >
                Регистрация
              </NavLink>
              <NavLink
                to="/Login"
                className="header__login-btn"
              >
                Войти
              </NavLink>
            </div>
          );
    }
  }

  React.useEffect(() => {
    handleHeaderChange();
  }, [location.pathname]);
  
    return (
      <header className="header">
        <div className="header__logo"/>
        {headerContainer}
      </header>
    );
}

export default Header;