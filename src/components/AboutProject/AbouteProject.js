import React from "react";

function AbouteProject() {
  return (
<>
  <section className="about-project" id='project'>
    <h2 className="about-project__title">О проекте</h2>
    <div className="about-project__facts">
      <h3 className="about-project__facts-title">Дипломный проект включал 5 этапов</h3>
      <h3 className="about-project__facts-title">На выполнение диплома ушло 5 недель</h3>
      <p className="about-project__facts-item">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      <p className="about-project__facts-item">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
    </div>
    <div className="about-project__schedule">
      <h3 className="about-project__schedule-title">1 неделя</h3>
      <h3 className="about-project__schedule-title">4 недели</h3>
      <p className="about-project__schedule-item">Backend</p>
      <p className="about-project__schedule-item">Frontend</p>
    </div>
  </section>   
</>
  )
}
export default AbouteProject;