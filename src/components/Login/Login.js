import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import useForm from '../../hooks/useForm';
import {   emailInputValidate,
  passwordValidate, } from '../../utils/validators';

const Login = ({ onLogin, serverError }) => {
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

  const { form, errors, handleChange } = useForm({
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({
      email: form.email,
      password: form.password,
    });
  }

  React.useEffect(() => {
    setEmailErrorMessage(emailInputValidate(form.email));
  }, [form.email]);

  React.useEffect(() => {
    setPasswordErrorMessage(passwordValidate(form.password));
  }, [form.password]);


  React.useEffect(() => {
    if (
      (emailErrorMessage === '') &
      (passwordErrorMessage === '')
    ) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [ emailErrorMessage, passwordErrorMessage, form.email, form.password]);


  return (
    <section className="login">
      <NavLink to="/" className="login__logo-link">
        <Logo className="login__logo" />
      </NavLink>
      <form onSubmit={handleSubmit} className="login__form">
        <h1 className="login__title">Рады видеть!</h1>
        <div className="login__input-container">
          <label className="login__label">E-mail</label>
          <input
            type="email"
            name="email"
            className="login__input"
            required={true}
            onChange={handleChange}
            value={form.email}
          ></input>
          <span
            className="login__span-error"
          >
            {emailErrorMessage}
          </span>
        </div>
        <div className="login__input-container">
          <label className="login__label">Пароль</label>
          <input
            type="password"
            name="password"
            className="login__input"
            autoComplete="off"
            required={true}
            onChange={handleChange}
            value={form.password}
          ></input>
          <span
            className="login__span-error"
          >
           {passwordErrorMessage}
          </span>
        </div>
        <span className='login__form-error'>{serverError}</span>
        <button disabled={isFormValid ? true : false} type="submit" className="login__submitBtn">
          Войти
        </button>
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
