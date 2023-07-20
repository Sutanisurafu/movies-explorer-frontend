import React from 'react';
import { NavLink } from 'react-router-dom';

function PopupWithNav({ isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? `popup_opened` : ''}`}>
      <div className="popup__container">
        <button onClick={onClose} className='popup__close-btn'></button>
        <nav className="popup__nav-container">
          <NavLink className="popup__nav-link" to="/">Главная</NavLink>
          <NavLink className="popup__nav-link" to="/movies">Фильмы</NavLink>
          <NavLink className="popup__nav-link" to="/saved-movies">Сохранённые фильмы</NavLink>
        </nav>
        <NavLink className="popup_nav__profile-link" to="/profile">Аккаунт</NavLink>
      </div>
    </div>
  );
}

export default PopupWithNav;
