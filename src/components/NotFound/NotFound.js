import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
const navigate = useNavigate();

function goBack() {
  navigate(-1);
}
  return (
    <section className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <h2 className='not-found__subtitle'>Страница не найдена</h2>
      <button onClick={goBack}  className='not-found__back-btn'>Назад</button>
    </section>
  );
}
export default NotFound;