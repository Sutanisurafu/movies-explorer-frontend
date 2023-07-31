import React from 'react';
import { moviesUrl } from '../../utils/constants';
import { classes } from '../../utils/constants';
import { useLocation } from 'react-router-dom';
function MovieCard({ card, isSaved, savedMovies, isLiked, onLike, onDisLike }) {
  const cardImage = isSaved ? card.image : `${moviesUrl + card.image.url}`;
  const location = useLocation();
  // const [onLikeClick, setOnLikeClick] = React.useState();
  
  function like() {
    onLike(card);
  }

  function disLike() {
    onDisLike(card);
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
          <p className="movie-card__duration">{card.duration}</p>
        </div>
        {/* <button onClick={onDisLikeClick}>DISLIKE</button> */}
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
        className="movie-card__image"
        src={cardImage}
        alt="Постер фильма"
      ></img>
    </article>
  );
}
export default MovieCard;
