import React from 'react';
import { NavLink } from 'react-router-dom';

function PopupWithNav({ isOpen, onClose }) {
  const setActive = ({isActive}) => isActive ? "popup__nav-link popup__nav-link_active" : "popup__nav-link"
  
  return (
    <div className={`popup ${isOpen ? `popup_opened` : ''}`}>
      <div className="popup__container">
        <button onClick={onClose} className='popup__close-btn'></button>
        <nav className="popup__nav-container">
          <NavLink className={setActive} to="/main">Главная</NavLink>
          <NavLink className={setActive} to="/movies">Фильмы</NavLink>
          <NavLink className={setActive} to="/saved-movies">Сохранённые фильмы</NavLink>
        </nav>
        <NavLink className="popup__nav-profile" to="/profile">Аккаунт</NavLink>
      </div>
    </div>
  );
}

export default PopupWithNav;
