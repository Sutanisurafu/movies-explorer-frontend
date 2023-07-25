import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Portfolio from '../Portfolio/Protfolio';
import studentImage from '../../images/student-face.jpg';

function AboutMe() {
  return (
    <>
      <section className="about-me" id="developer">
        <SectionTitle title={'Студент'} />
        <div className="student-card">
          <div className="student-card__text-container">
            <h3 className="student-card__text-title">Станислав</h3>
            <h4 className="student-card__text-subtitle">
              Фронтенд-разработчик, 30 лет
            </h4>
            <p className="student-card__text-paragraph">
              Я родился и пока живу в Екатеринбурге, закончил училище на
              оператора ЭВМ и имею незаконченное высшее факультета физики в
              УрФУ. Люблю: музыку, сериалы, аниме , технику, обожаю водить любой
              транспорт, пробовать новое и еще много чего. После учебы в
              основном работал в такси и в сфере строительства.
            </p>
            <a href='http://github.com/sutanisurafu' className="student-card__link" target='blank'>Github</a>
          </div>
          <img
            className="student-card__image"
            alt="Фотография студента"
            src={studentImage}
          ></img>
        </div>
        <Portfolio />
      </section>
    </>
  );
}
export default AboutMe;
