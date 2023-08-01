import React from 'react';
import { moviesUrl } from '../../utils/constants';
import { classes } from '../../utils/constants';
import { useNavigate, useLocation } from 'react-router-dom';
import { getTimeFromMins } from '../../utils/utils';
function MovieCard({ card, isSaved, savedMovies, isLiked, onLike, onDisLike }) {
  const cardImage = isSaved ? card.image : `${moviesUrl + card.image.url}`;
  const location = useLocation();
  const navigate = useNavigate();  // const [onLikeClick, setOnLikeClick] = React.useState();
  
  function like() {
    onLike(card);
  }

  function disLike() {
    onDisLike(card);
  }

  function openTrailer() {
    window.open(card.trailerLink, '_blank')
  }

  // React.useEffect(() => {
  //   if (location.pathname === "/movies") {
  //     setOnLikeClick(like)
  //   } else {setOnLikeClick(disLike)}
  // }, [location.pathname])

  return (
    <article className="movie-card">
      <div className="movie-card__header-container">
        <div className="movie-card__text-container">
          <h2 className="movie-card__title">{card.nameRU}</h2>
          <p className="movie-card__duration">{getTimeFromMins(card.duration)}</p>
        </div>
        <button
          onClick={() => {
            if (location.pathname === "/movies") {
              like()
            } else {disLike()}
          }}
          className={
            !isSaved
              ? `${classes.favoriteBtn} ${
                  card.id &&
                  savedMovies.some((movie) => movie.movieId === card.id) &&
                  'movie-card__favorite-btn_active'
                }`
              : classes.deleteBtn
          }
        />
      </div>
      <img
        onClick={openTrailer}
        className="movie-card__image"
        src={cardImage}
        alt="Постер фильма"
      ></img>
    </article>
  );
}
export default MovieCard;
