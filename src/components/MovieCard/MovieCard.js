import React from 'react';

import { classes } from '../../utils/constants';
function MovieCard({ card, isSaved, onLike }) {
  const cardImage = `https://api.nomoreparties.co${card.image.url}`;

  function onLikeClick() {
    onLike()
    console.log(card)
  }

  return (
    <article className="movie-card">
      <div className="movie-card__header-container">
        <div className="movie-card__text-container">
          <h2 className="movie-card__title">{card.nameRU}</h2>
          <p className="movie-card__duration">{card.duration}</p>
        </div>
        <button onClick={onLikeClick} className={!isSaved ? classes.favoriteBtn : classes.deleteBtn}/>
      </div>
      <img className='movie-card__image' src={cardImage} alt="Постер фильма"></img>
    </article>
  );
}
export default MovieCard;
