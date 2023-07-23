import React from 'react';

function MovieCard({ card, isSaved }) {
  const favoriteBtn = "movie-card__favorite-btn"
  const deleteBtn = "movie-card__favorite-delete"
  return (
    <article className="movie-card">
      <div className="movie-card__header-container">
        <div className="movie-card__text-container">
          <h2 className="movie-card__title">{card.nameRU}</h2>
          <p className="movie-card__duration">{card.duration}</p>
        </div>
        <button className={!isSaved ? favoriteBtn : deleteBtn}/>
      </div>
      <img className='movie-card__image' src={card.image} alt="Постер фильма"></img>
    </article>
  );
}
export default MovieCard;
