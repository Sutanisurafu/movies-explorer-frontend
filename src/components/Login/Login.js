import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';

const Login = () => {
  return (
    <section className="login">
      <NavLink to="/" className="login__logo-link">
        <Logo className="login__logo" />
      </NavLink>
      <form className='login__form'>
        <h1 className="login__title">Рады видеть!</h1>
        <label className="login__label">E-mail</label>
        <input
          type="email"
          name="email"
          className="login__input"
          required={true}
        ></input>
        <label className="login__label">Пароль</label>
        <input
          type="password"
          name="password"
          className="login__input"
          autoComplete="off"
          required={true}
        ></input>
        <button className="login__submitBtn">Войти</button>
        <span className="login_register-span">
          Ещё не зарегистрированы?
          <NavLink className="login__register-link" to="/register">
            Регистрация
          </NavLink>
        </span>
      </form>
    </section>
  );
};

export default Login;
