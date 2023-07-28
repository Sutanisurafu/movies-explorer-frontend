import React from 'react';
import SearchForm from '../SearchForm/SearchFom';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useResize } from '../../hooks/use-resize';
import { sliceMoviesList } from '../../utils/utils';

function Movies({ isSearched, foundMovies, onSearch, resultText }) {
  const searchResult = JSON.parse(localStorage.getItem("foundMovies"));
  const checkBoxState = localStorage.getItem("checkBoxState");
  const searchInputValue = localStorage.getItem("searchValue");
  const [moreBtnEmergence, setMoreBtnEmergence] = React.useState(false);
  const [slicedList, setSlicedList] = React.useState(foundMovies);
  const [numberOfAddedMovies, setNumberOfAddedMovies] = React.useState(0);
  const { width, isScreenMobile, isScreenPC } = useResize();
  const [isChecked, setIsChecked] = React.useState(false);

  const moreBtnClassName = `section-movies__more-btn ${
    moreBtnEmergence && 'section-movies__more-btn_visible'
  }`;

 //управляет количеством отрисованных карточек в зависимости от ширины экрана
  function handleCardsShow(moviesList) {
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
    if (foundMovies.length > slicedList.length) {
      setMoreBtnEmergence(true);
    } else {
      setMoreBtnEmergence(false);
    }
  }


  function handleMoreButtonClick() {
    setSlicedList([
      ...slicedList,
      ...sliceMoviesList(
        foundMovies,
        slicedList.length,
        slicedList.length + numberOfAddedMovies
      ),
    ]);
    handleMoreButtonVisible();
  }

  function handleCheckBoxClick() {
    setIsChecked(!isChecked)
  }

  //убирает кнопку more когда заканчивются карточки
  React.useEffect(() => {
    handleMoreButtonVisible();
  }, [slicedList]);

  React.useEffect(() => {
    if (!!searchResult) {handleCardsShow(searchResult)}
  }, [])

  React.useEffect(() => {
    handleMoreButtonVisible();
    handleCardsShow(foundMovies);
  }, [foundMovies, width]);

  return (
    <main className="section-movies">
      <SearchForm onSearch={onSearch} clickCheckBox={handleCheckBoxClick} isChecked={isChecked}/>
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
