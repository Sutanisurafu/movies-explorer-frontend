import React from 'react';
import { CurrentUserContextObj } from "../../contexts/CurrentUserContext";

const Profile = ({ onLogout }) => {
  const currentUser = React.useContext(CurrentUserContextObj);
  
  function onLogoutClick(event) {
    event.preventDefault();
    onLogout()
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}</h1>
      <form className="profile__form">   
        <div className='profile__item'>
          <label className='profile__input-label'>Имя</label>
            <input
              type="text"
              name="name"
              className="profile__input"
              placeholder="name"
              defaultValue={currentUser.name}
              required={true}
            ></input> 
        </div>
        <div className='profile__item'>
          <label className='profile__input-label'>E-mail</label>
          <input
              type="email"
              name="email"
              defaultValue={currentUser.email}
              className="profile__input"
              placeholder="email"
              required={true}>
          </input> 
        </div>
        <button className="profile__edit-btn">Редактировать</button>
        <button onClick={onLogoutClick} className='profile__logout-btn'>Выйти из аккаунта</button>
      </form>
    </section>
  );
};

export default Profile;
