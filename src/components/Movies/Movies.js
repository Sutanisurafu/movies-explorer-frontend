import React from 'react';
import SearchForm from '../SearchForm/SearchFom';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useResize } from '../../hooks/use-resize';
import { sliceMoviesList } from '../../utils/utils';

function Movies({ isSearched, moviesList, onSearch, resultText }) {
  const [moreBtnEmergence, setMoreBtnEmergence] = React.useState(false);
  const [slicedList, setSlicedList] = React.useState(moviesList);
  const [numberOfAddedMovies, setNumberOfAddedMovies] = React.useState(0);
  
  const { width, isScreenMobile, isScreenX, isScreenPC } = useResize();
  
  const moreBtnClassName = `section-movies__more-btn ${
    moreBtnEmergence && 'section-movies__more-btn_visible'
  }`;

  // function handleCardsShow() {
  //   if (isScreenPC && moviesList.length > 12) {
  //     setMoreBtnEmergence(true);
  //     setSlicedList(sliceMoviesList(moviesList, 0, 12));
  //   } else {
  //     // setMoreBtnEmergence(false);
  //     setSlicedList(moviesList)
  //   }
  //   if (isScreenX && moviesList.length > 8) {
  //     setMoreBtnEmergence(true);
  //     setSlicedList(sliceMoviesList(moviesList, 0, 8));
  //   } else {
  //     setSlicedList(moviesList)
  //     // setMoreBtnEmergence(false);
  //   }
  //   if (isScreenMobile && moviesList.length > 5) {
  //     setMoreBtnEmergence(true);
  //     setSlicedList(sliceMoviesList(moviesList, 0, 5));
  //     // console.log(isScreenMobile)
  //   }
  // }

  function handleCardsShow() {
    switch (true) {
      case isScreenPC:
        setSlicedList(sliceMoviesList(moviesList, 0, 12));
        setNumberOfAddedMovies(3);
        break;
      case isScreenMobile:
        setSlicedList(sliceMoviesList(moviesList, 0, 5));
        setNumberOfAddedMovies(2);
        break;
      default:
        setSlicedList(sliceMoviesList(moviesList, 0, 8));
        setNumberOfAddedMovies(2);
    }
  }

  function handleMoreButtonVisible() {
    if (moviesList.length > slicedList.length) {
      setMoreBtnEmergence(true);
    } else {setMoreBtnEmergence(false)}
  }



  React.useEffect(() => {
    handleCardsShow();
    handleMoreButtonVisible()
  }, [moviesList, width]);

  return (
    <main className="section-movies">
      <SearchForm onSearch={onSearch} />
      {isSearched ? (
        <>
          <MoviesCardList moviesList={slicedList} resultText={resultText} />
          <button className={moreBtnClassName}>Ещё</button>
        </>
      ) : (
        <Preloader />
      )}
    </main>
  );
}
export default Movies;
