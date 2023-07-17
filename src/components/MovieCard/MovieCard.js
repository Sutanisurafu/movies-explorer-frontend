import React from 'react';

function MovieCard({ card }) {
  return (
    <article className="movie-card">
      <div className="movie-card__header-container">
        <div className="movie-card__text-container">
          <h2 className="movie-card__title">{card.nameRU}</h2>
          <p className="movie-card__duration">{card.duration}</p>
        </div>
        <button className="movie-card__favorite-btn" />
      </div>
      <img src={card.image} alt="Постер фильма"></img>
    </article>
  );
}
export default MovieCard;
