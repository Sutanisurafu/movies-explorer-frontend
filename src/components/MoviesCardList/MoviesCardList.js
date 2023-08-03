import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import Preloader from '../Preloader/Preloader';
import {
  sliceMoviesList,
  getMoreButtonVisible,
  getShortFilms,
  isSectionFavorites,
} from '../../utils/utils';
import { useResize } from '../../hooks/use-resize';
import { useLocation } from 'react-router-dom';

function MoviesCardList({ foundMovies, isChecked, onLike, onDisLike, savedMovies }) {
  const location = useLocation();
  const [moreBtnEmergence, setMoreBtnEmergence] = React.useState(true);
  const moreBtnClassName = `section-movies__more-btn ${
    moreBtnEmergence && 'section-movies__more-btn_visible'
  }`;
  const { width, isScreenMobile, isScreenPC } = useResize();

  const [numberOfAddedMovies, setNumberOfAddedMovies] = React.useState(0);
  const [showedMovies, setShowedMovies] = React.useState([]);
  const [isFavorites, setIsFavorites] = React.useState(
    isSectionFavorites(location)
  );


  React.useEffect(() => {
    isFavorites ? setMoreBtnEmergence(false) : setMoreBtnEmergence(true)
  }, [location])

  React.useEffect(() => {
    if (!isFavorites) {
      if (isScreenPC) {
        setShowedMovies(sliceMoviesList(foundMovies, 0, 12));
        setNumberOfAddedMovies(3);
        setMoreBtnEmergence(getMoreButtonVisible(foundMovies, showedMovies));
      } else if (isScreenMobile) {
        setShowedMovies(sliceMoviesList(foundMovies, 0, 5));
        setNumberOfAddedMovies(2);
      } else {
        setShowedMovies(sliceMoviesList(foundMovies, 0, 8));
        setNumberOfAddedMovies(2);
      }
    } else {setShowedMovies(foundMovies)}
  }, [width, foundMovies]);

  React.useEffect(() => {
    if (!isFavorites) {
      if (foundMovies.length <= showedMovies.length) {
        setMoreBtnEmergence(false);
      } else {
        setMoreBtnEmergence(true);
      }
    }
  }, [showedMovies]);

  //если savedMovies то рендерю массив сохраненных карточек без кнопки more
  //   return !foundMovies.length ? (
  //     <h2 className="cardlist-section__title">ничего не найдено</h2>
  //   ) : ( isFavorites ? <div className="cardlist-section">
  //   {showedMovies.map((movieCard) => {
  //     return (
  //       <MovieCard card={movieCard} key={movieCard.id} onLike={onLike} />
  //     );
  //   })}
  // </div> :
  // <>

  //   <div className="cardlist-section">
  //     {showedMovies.map((movieCard) => {
  //       return (
  //         <MovieCard card={movieCard} key={movieCard.id} onLike={onLike} />
  //       );
  //     })}
  //   </div>
  //   <button
  //     onClick={() => {
  //       setShowedMovies(
  //         sliceMoviesList([
  //           ...showedMovies,
  //           ...sliceMoviesList(
  //             foundMovies,
  //             showedMovies.length,
  //             showedMovies.length + numberOfAddedMovies
  //           ),
  //         ])
  //       );
  //     }}
  //     className={moreBtnClassName}
  //   >
  //     Ещё
  //   </button>
  // </>
  //   );

  return (

    foundMovies.length ? <>
    <div className="cardlist-section">
      {showedMovies.map((movieCard) => {
        return (
          <MovieCard
            savedMovies={savedMovies}
            isFavorites={isFavorites}
            card={movieCard}
            key={movieCard.id || movieCard._id}
            onLike={onLike}
            onDisLike={onDisLike}
          />
        );
      })}
    </div>
{    <button
      onClick={() => {
        setShowedMovies(
          sliceMoviesList([
            ...showedMovies,
            ...sliceMoviesList(
              foundMovies,
              showedMovies.length,
              showedMovies.length + numberOfAddedMovies
            ),
          ])
        );
      }}
      className={moreBtnClassName}
    >
      Ещё
    </button>}
  </> 
  : (<h2 className="cardlist-section__title">ничего не найдено</h2>))
}
export default MoviesCardList;
