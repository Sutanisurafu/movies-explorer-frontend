import React from 'react';

function Footer({ onExit, profileEmail }) {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container">
        <p className="footer__caption">©2020</p>
        <ul className="footer__links">
          <li>
            <a className="footer__link" href="https://practicum.yandex.ru/" target="blank">
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a className="footer__link" href="http://github.com" target="blank">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
