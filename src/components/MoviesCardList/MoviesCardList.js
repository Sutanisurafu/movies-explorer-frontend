import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ moviesList, savedMoviesList, isSaved, resultText, onLike, onDisLike, isFavorite }) {

  return (
    (!moviesList.length ? <h2 className='cardlist-section__title'>{resultText}
    </h2> :  <div className="cardlist-section">
      {moviesList.map((movieCard) => {
        return (
          <MovieCard
            // isLiked={isLiked}
            savedMovies={savedMoviesList}
            isFavorite={isFavorite}
            isSaved={isSaved}
            key={movieCard.id}
            card={movieCard}
            onLike={onLike}
            onDisLike={onDisLike}
          />
      );
      })}
    </div>
     )

  );
}
export default MoviesCardList;
