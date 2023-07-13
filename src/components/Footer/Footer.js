

import React from "react";


function Footer({ onExit, profileEmail }) {

  return (
    <footer className="footer">
      <div className="footer-title">Учебный проект Яндекс.Практикум х BeatFilm.</div>
      <div className="footer__caption">©2020</div>
      <div className="footer-links">
      <caption>Яндекс.практикум</caption>
      <caption>Github</caption>
      </div>
    </footer>
  );
}

export default Footer;
