import React from 'react';

const Profile = () => {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет Виталий!</h1>
      <form className="profile__form">   
        <div className='profile__item'>
          <label className='profile__input-label'>Имя</label>
            <input
              type="text"
              name="name"
              className="profile__input"
              placeholder="name"
              defaultValue="Виталий"
              required={true}
            ></input> 
        </div>
        <div className='profile__item'>
          <label className='profile__input-label'>E-mail</label>
          <input
              type="email"
              name="email"
              defaultValue="pochta@yandex.ru"
              className="profile__input"
              placeholder="email"
              required={true}>
          </input> 
        </div>
        <button className="profile__edit-btn">Редактировать</button>
        <button className='profile__logout-btn'>Выйти из аккаунта</button>
      </form>
    </section>
  );
};

export default Profile;
