import React from "react";

function NavTab() {
  return (
    <ul className="promo__nav-container">
      <li className="promo__nav-btn"><a className="promo_nav-link" href="#project">О проекте</a></li>
      <li className="promo__nav-btn"><a className="promo_nav-link" href="#techs">Технологии</a></li>
      <li className="promo__nav-btn"><a className="promo_nav-link" href="#developer">Студент</a></li>
    </ul>
  )
}
export default NavTab;