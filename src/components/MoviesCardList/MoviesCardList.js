import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ moviesList, isSaved }) {

  return (
    <div className="cardlist-section">
      {moviesList.map((movieCard) => {
        return (
          <MovieCard
            isSaved={isSaved}
            key={movieCard.id}
            card={movieCard}
          />
      );
      })}
    </div>
  );
}
export default MoviesCardList;
