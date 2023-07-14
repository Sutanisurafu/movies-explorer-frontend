

import React from "react";


function Footer({ onExit, profileEmail }) {

  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
          <caption className="footer__caption">©2020</caption>
          <ul className="footer__links">
            <li className="footer__links-item">Яндекс.практикум</li>
            <li className="footer__links-item">Github</li>
          </ul>
      </div>

    </footer>
  );
}

export default Footer;
