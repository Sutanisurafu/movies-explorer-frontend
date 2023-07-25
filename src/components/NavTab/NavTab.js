import React from "react";

function NavTab() {
  return (
    <ul className="nav-tab">
      <li className="nav-tab__btn"><a className="nav-tab__link" href="#project">О проекте</a></li>
      <li className="nav-tab__btn"><a className="nav-tab__link" href="#techs">Технологии</a></li>
      <li className="nav-tab__btn"><a className="nav-tab__link" href="#developer">Студент</a></li>
    </ul>
  )
}
export default NavTab;