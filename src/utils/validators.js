import { nameRegex, emailRegex } from './constants';

export const nameValidate = (name) => {
  return nameRegex.test(name);
};

export const emailValidate = (email) => {
  return emailRegex.test(email);
};

export const passwordValidate = (password) => {
  if (isEmptyInputValidate(password)) {
    return 'Поле password не может быть пустым';
  } else if (password.length < 3) {
    return 'Пароль должен быть длиннее трёх символов';
  } else {
    return '';
  }
};

export const isEmptyInputValidate = (inputValue) => {
  return inputValue === '';
};



export const nameInputValidate = (name) => {
  if (isEmptyInputValidate(name)) {
    return 'Поле name не может быть пустым';
  } else if (!nameValidate(name)) {
    return 'имя должно содержать только латиницу, кириллицу, пробел или дефис';
  } else {
    return '';
  }
};

export const emailInputValidate = (email) => {
  if (isEmptyInputValidate(email)) {
    return 'Поле email не может быть пустым';
  } else if (!emailValidate(email)) {
    return 'Введён некорректный email';
  } else {
    return '';
  }
};
