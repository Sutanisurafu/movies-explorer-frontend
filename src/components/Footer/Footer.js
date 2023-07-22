

import React from "react";


function Footer({ onExit, profileEmail }) {

  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__caption">©2020</p>
        <ul className="footer__links">
            <li className="footer__links-item">Яндекс.Практикум</li>
            <li className="footer__links-item">Github</li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;
