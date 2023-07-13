import React from "react";

function AboutMe() {
  return (
<>
    <section id='developer'>
    <h2 className="section-title">Студент</h2>
    <div className="student-card">
      <div className="student-card__text">
        <h3>Станислав</h3>
        <h4>Фронтенд-разработчик, 30 лет</h4>
        <p>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
      </div>
      <div className="student-card__image"></div>
    </div>
    <div>Github</div>
    <div>Портфолио</div>
    <div>Ссылка на статичный проект</div>
    <div>Ссылка на адаптивный сайт</div>
    <div>Ссылка на одностроничное приложение</div>
    </section>
</>
  )
}
export default AboutMe;