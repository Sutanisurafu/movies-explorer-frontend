import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import useForm from '../../hooks/useForm';
import {
  nameInputValidate,
  emailInputValidate,
  passwordValidate,
} from '../../utils/validators';

const Register = ({ onRegister, serverError }) => {
  const [isFormValid, setIsFormValid] = React.useState(false);

  const [nameErrorMessage, setNameErrorMessage] = React.useState('');
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const { form, errors, handleChange } = useForm({
    name: '',
    email: '',
    password: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({
      name: form.name,
      email: form.email,
      password: form.password,
    });
  }


  React.useEffect(() => {
    setNameErrorMessage(nameInputValidate(form.name));
  }, [form.name]);

  React.useEffect(() => {
    setEmailErrorMessage(emailInputValidate(form.email));
  }, [form.email]);

  React.useEffect(() => {
    setPasswordErrorMessage(passwordValidate(form.password));
  }, [form.password]);

  React.useEffect(() => {
    if (
      (nameErrorMessage === '') &
      (emailErrorMessage === '') &
      (passwordErrorMessage === '')
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [nameErrorMessage, emailErrorMessage, passwordErrorMessage, form.name, form.email, form.password]);

  React.useEffect(() => {
    setNameErrorMessage(" ");
    setEmailErrorMessage(" ");
    setPasswordErrorMessage(" ")
  }, [])



  return (
    <section className="register">
      <NavLink to="/" className="register__logo-link">
        <Logo className="register__logo" />
      </NavLink>
      <form className="register__form" onSubmit={handleSubmit}>
        <h1 className="register__title">Добро пожаловать!</h1>
        <div className="register__input-container">
          <span className="register__label">Имя</span>
          <input
            type="text"
            name="name"
            className="register__input"
            required={true}
            onChange={handleChange}
            value={form.name}
          ></input>
          <span className="register__span-error">{nameErrorMessage}</span>
        </div>
        <div className="register__input-container">
          <span className="register__label">E-mail</span>
          <input
            type="email"
            name="email"
            className="register__input"
            required={true}
            onChange={handleChange}
            value={form.email}
          ></input>
          <span className="register__span-error">{emailErrorMessage}</span>
        </div>
        <div className="register__input-container">
          <span className="register__label">Пароль</span>
          <input
            type="password"
            name="password"
            className="register__input"
            autoComplete="off"
            required={true}
            onChange={handleChange}
            value={form.password}
            min={4}
          ></input>
          <span className="register__span-error">{passwordErrorMessage}</span>
        </div>
        <span className='register__form-error'>{serverError}</span>
        <button
          disabled={!isFormValid ? true : false}
          type="submit"
          className="register__submitBtn"
        >
          Зарегистрироваться
        </button>
        <span className="register_register-span">
          Уже зарегистрированы?
          <NavLink className="login__register-link" to="/login">
            Войти
          </NavLink>
        </span>
      </form>
    </section>
  );
};

export default Register;
