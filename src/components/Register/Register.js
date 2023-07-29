import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import useForm from '../../hooks/useForm'
import { nameValidate, emailValidate } from '../../utils/validators';

const Register = ({ onRegister}) => {
  const [isNameError, setIsNameError] = React.useState(false);
  const [isEmailError, setIsEmailError] = React.useState(false);
  const { form, errors, handleChange } = useForm({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({
      name: form.name,
      email: form.email,
      password: form.password,
    });
  }

  function formValidate(form) {

  }

  console.log(nameValidate(form.name))
  console.log(emailValidate(form.email))

  function test() {
    
  }

  



  return (
    <section className="register">
      <NavLink to="/" className="register__logo-link">
        <Logo className="register__logo" />
      </NavLink>
      <div>{isNameError ? "ОШИБКА" : "Все норм"}</div>
      <form className='register__form' onSubmit={handleSubmit}>
      <h1 className="register__title">Добро пожаловать!</h1>
        <span className="register__label">Имя</span>
        <input
          type="text"
          name="name"
          className="register__input"
          required={true}
          onChange={handleChange}
          value={form.name}
          min={2}
        ></input>
        <span className="register__label">E-mail</span>
        <input
          type="email"
          name="email"
          className="register__input"
          required={true}
          onChange={handleChange}
          value={form.email}
        ></input>
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
        <button className="register__submitBtn">Зарегистрироваться</button>
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
