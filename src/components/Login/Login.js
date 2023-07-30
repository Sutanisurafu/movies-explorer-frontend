import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import useForm from '../../hooks/useForm';
import { emailValidate, passwordValidate } from '../../utils/validators';

const Login = ({ onLogin }) => {
  const [isEmailError, setIsEmailError] = React.useState(false);
  const [isPassError, setIsPassError] = React.useState(false);
  const [isSubmitBtnVisible, setIsSubmitButtonVisible] = React.useState(false);
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

    if (!isEmailError & !isPassError) {
      setIsSubmitButtonVisible(true)
    } else {setIsSubmitButtonVisible(false)}
  }, [isEmailError, isPassError])



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
            style={{ visibility: isEmailError ? 'visible' : 'hidden' }}
            className="login__span-error"
          >
            некорректный email
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
            style={{ visibility: isPassError ? 'visible' : 'hidden' }}
            className="login__span-error"
          >
            слишком короткий пароль
          </span>
        </div>
        <button disabled={!isSubmitBtnVisible ? true : false} type="submit" className="login__submitBtn">
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
