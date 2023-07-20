import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
function AbouteProject() {
  return (
<>
  <section className="about-project" id='project'>
    <SectionTitle title={"О проекте"}/>
    <div className="about-project__facts">
      <h3 className="about-project__facts-title">Дипломный проект включал 5 этапов</h3>
      <h3 className="about-project__facts-title">На выполнение диплома ушло 5 недель</h3>
      <p className="about-project__facts-item">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      <p className="about-project__facts-item">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
    </div>
    <div className="about-project__schedule">
      <h3 className="about-project__schedule-title">1 неделя</h3>
      <h3 className="about-project__schedule-title">4 недели</h3>
      <p className="about-project__schedule-item">Back-end</p>
      <p className="about-project__schedule-item">Front-end</p>
    </div>
  </section>   
</>
  )
}
export default AbouteProject;