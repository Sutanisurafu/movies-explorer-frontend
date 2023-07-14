import React from 'react';
import arrow from '../../images/arrow.png';
function Portfolio() {
  return (
    <div className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__container">
        <li className="portfolio__item">
          <a
            className="portfolio__item-link"
            href="https://github.com/Sutanisurafu/mesto"
          >
            Статичный сайт
            <img className='portfolio__item-arrow' src={arrow} alt='стрелка'/>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__item-link"
            href="https://github.com/Sutanisurafu/mesto"
          >
            Адаптивный сайт
            <img className='portfolio__item-arrow' src={arrow} alt='стрелка'/>
          </a>
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__item-link"
            href="https://github.com/Sutanisurafu/mesto"
          >
            Одностраничное приложение
            <img className='portfolio__item-arrow' src={arrow} alt='стрелка'/>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Portfolio;
