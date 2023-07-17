import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Portfolio from "../Portfolio/Protfolio";
import studentImage from "../../images/student-face.jpg"

function AboutMe() {
  return (
<>
    <section className="about-me" id='developer'>
      <SectionTitle title={"Студент"}/>
      <div className="student-card">
        <div className="student-card__text-container">
          <h3 className="student-card__text-title">Станислав</h3>
          <h4 className="student-card__text-subtitle">Фронтенд-разработчик, 30 лет</h4>
          <p className="student-card__text-paragraph">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className="student-card__link">Github</a>
        </div>
        <img className="student-card__image" alt="Фотография студента" src={studentImage}></img>
      </div>
      <Portfolio/>
    </section>
</>
  )
}
export default AboutMe;