import React from 'react';
import Header from '../Header/Header';
import { CurrentUserContextObj } from '../../contexts/CurrentUserContext';
import useForm from '../../hooks/useForm';
import { nameInputValidate, emailInputValidate } from '../../utils/validators';

const Profile = ({ onLogout, onsubmit, loggedIn, onNav }) => {
  const currentUser = React.useContext(CurrentUserContextObj);

  const [isFormValid, setIsFormValid] = React.useState(false);

  const [nameErrorMessage, setNameErrorMessage] = React.useState('');
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');

  const [isEditBtnActive, setIsEditBtnActive] = React.useState(false);

  const { form, errors, handleChange } = useForm({
    name: currentUser.name,
    email: currentUser.email,
  });

  function onLogoutClick(event) {
    event.preventDefault();
    onLogout();
  }

  function handleSubmit(e) {
    e.preventDefault();
    onsubmit({
      email: form.email,
      name: form.name,
    })
  }

  React.useEffect(() => {
    setNameErrorMessage(nameInputValidate(form.name));
  }, [form.name]);

  React.useEffect(() => {
    setEmailErrorMessage(emailInputValidate(form.email));
  }, [form.email]);

  React.useEffect(() => {
    if (
      (nameErrorMessage === '') &
      (emailErrorMessage === '') &
      (form.name !== currentUser.name || form.email !== currentUser.email)
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [nameErrorMessage, emailErrorMessage, form.name, form.email]);



  return (
    <>
      <Header loggedIn={loggedIn} onNav={onNav} />
      <section className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}</h1>
        <form onSubmit={handleSubmit} className="profile__form">
          <div className="profile__item">
            <label className="profile__input-label">Имя</label>
            <input
              type="text"
              name="name"
              className="profile__input"
              placeholder="name"
              defaultValue={currentUser.name}
              required={true}
              onChange={handleChange}
            ></input>
            <span className="profile__item_span-error">{nameErrorMessage}</span>
          </div>

          <div className="profile__item">
            <label className="profile__input-label">E-mail</label>
            <input
              type="email"
              name="email"
              defaultValue={currentUser.email}
              className="profile__input"
              placeholder="email"
              required={true}
              onChange={handleChange}
            ></input>
            <span className="profile__item_span-error">
              {emailErrorMessage}
            </span>
          </div>
          <button
            disabled={isFormValid ? false : true}
            className="profile__edit-btn"
          >
            Редактировать
          </button>
          <button onClick={onLogoutClick} className="profile__logout-btn">
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
};

export default Profile;
