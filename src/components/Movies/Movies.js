import React from 'react';
import SearchForm from '../SearchForm/SearchFom';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useResize } from '../../hooks/use-resize';
import { sliceMoviesList, getShortFilms } from '../../utils/utils';

function Movies({ isSearched, moviesList, onSearch, resultText, onCheckBoxClick, isChecked }) {
  const [moreBtnEmergence, setMoreBtnEmergence] = React.useState(false);
  const [slicedList, setSlicedList] = React.useState(moviesList);
  const [numberOfAddedMovies, setNumberOfAddedMovies] = React.useState(0);


  const { width, isScreenMobile, isScreenPC } = useResize();

  const moreBtnClassName = `section-movies__more-btn ${
    moreBtnEmergence && 'section-movies__more-btn_visible'
  }`;

 //управляет количеством отрисованных карточек в зависимости от ширины экрана
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

  //управляет отрисовкой кнопки more
  function handleMoreButtonVisible() {
    if (moviesList.length > slicedList.length) {
      setMoreBtnEmergence(true);
    } else {
      setMoreBtnEmergence(false);
    }
  }

  // function handleCheckBoxClick() {
  //   setIsChecked(!isChecked);
  //   if (!isChecked) {setSlicedList(getShortFilms(moviesList))} else {handleCardsShow()}
  //   // isChecked ? setSlicedList(getShortFilms(moviesList)) : setSlicedList(slicedList)
  // }

  function handleMoreButtonClick() {
    setSlicedList([
      ...slicedList,
      ...sliceMoviesList(
        moviesList,
        slicedList.length,
        slicedList.length + numberOfAddedMovies
      ),
    ]);
    handleMoreButtonVisible();
  }

  //убирает кнопку more когда заканчивются карточки
  React.useEffect(() => {
    handleMoreButtonVisible();
  }, [slicedList]);


  React.useEffect(() => {
    handleCardsShow();
    handleMoreButtonVisible();
  }, [moviesList, width]);

  return (
    <main className="section-movies">
      <SearchForm onSearch={onSearch} clickCheckBox={onCheckBoxClick} isChecked={isChecked}/>
      {isSearched ? (
        <>
          <MoviesCardList moviesList={slicedList} resultText={resultText} />
          <button onClick={handleMoreButtonClick} className={moreBtnClassName}>
            Ещё
          </button>
        </>
      ) : (
        <Preloader />
      )}
    </main>
  );
}
export default Movies;
