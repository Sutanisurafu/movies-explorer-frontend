import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';

const Register = () => {
  return (
    <form className="register">
      <NavLink to="/" className="register__logo-link">
        <Logo className="register__logo" />
      </NavLink>
      <h1 className="register__title">Добро пожаловать!</h1>
      <span className="register__label">Имя</span>
      <input
        type="text"
        name="name"
        className="register__input"
        required={true}
      ></input>
      <span className="register__label">E-mail</span>
      <input
        type="email"
        name="email"
        className="register__input"
        required={true}
      ></input>
      <span className="register__label">Пароль</span>
      <input
        type="password"
        name="password"
        className="register__input"
        autoComplete="off"
        required={true}
      ></input>
      <button className="register__submitBtn">Зарегистрироваться</button>
      <span className="register_register-span">
        Уже зарегистрированы?
        <NavLink className="login__register-link" to="/login">
          Войти
        </NavLink>
      </span>
    </form>
  );
};

export default Register;
