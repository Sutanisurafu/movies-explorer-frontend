import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import useForm from '../../hooks/useForm';
import { nameValidate, emailValidate, passwordValidate } from '../../utils/validators';

const Register = ({ onRegister }) => {
  const [isNameError, setIsNameError] = React.useState(false);
  const [isEmailError, setIsEmailError] = React.useState(false);
  const [isPassError, setIsPassError] = React.useState(false);
  const [isSubmitBtnVisible, setIsSubmitButtonVisible] = React.useState(false);
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
    if (nameValidate(form.name)) {
      setIsNameError(false);
    } else {
      setIsNameError(true);
    }
  }, [form.name]);

  React.useEffect(() => {
    if (emailValidate(form.email)) {
      setIsEmailError(false);
    } else {
      setIsEmailError(true);
    }
  },[form.email]);

  React.useEffect(() => {
    if (passwordValidate(form.password)) {
      setIsPassError(false);
    } else {
      setIsPassError(true);
    }
  },[form.password]);

  React.useEffect(() => {
    if (!isNameError & !isEmailError & !isPassError) {
      setIsSubmitButtonVisible(true)
    } else {setIsSubmitButtonVisible(false)}
  }, [isNameError, isEmailError, isPassError])



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
          <span style={{visibility: isNameError ? 'visible' : 'hidden' }} className="register__span-error">
            имя должно содержать только латиницу, кириллицу, пробел или дефис
          </span>
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
          <span style={{visibility: isEmailError ? 'visible' : 'hidden' }} className="register__span-error">
            некорректный email
          </span>
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
          <span style={{visibility: isPassError ? 'visible' : 'hidden' }} className="register__span-error">слишком короткий пароль</span>
        </div>
        <button disabled={!isSubmitBtnVisible ? true : false} type="submit" className="register__submitBtn">Зарегистрироваться</button>
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
