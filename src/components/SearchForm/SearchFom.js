import React from 'react';
import searchIcon from '../../images/search-icon.png';
import searchLine from '../../images/search-form__line.svg';
import useForm from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { isEmptyInputValidate } from '../../utils/validators';

function SearchForm({ onCheckBox, onSearch, isChecked }) {
  const location = useLocation();
  const searchInputValue = localStorage.getItem('searchValue');
  const [inputValue, setInputValue] = React.useState(searchInputValue);
  const [isError, setIsError] = React.useState(false);

  const { form, errors, handleChange } = useForm({
    searhValue: '',
  });


  const handleSubmit = (e) => {
    e.preventDefault();
     if (isEmptyInputValidate(e.target.search.value)) {
       setIsError(true)
      } else {
        setIsError(false);
        onSearch(e.target.search.value);
     }
  };

  return (
    <form className="search__container" onSubmit={handleSubmit}>
      <input
        defaultValue={location.pathname === '/saved-movies' ? "" : inputValue}
        onChange={handleChange}
        className="search__input"
        type="text"
        placeholder="Фильм"
        name="search"

      ></input>
      <span style={{visibility: isError ? "visible" : "hidden"}} className='search__container-error'>Нужно ввести ключевое слово!</span>
      <img className="search__image" src={searchIcon} alt="лупа"></img>
      <button type="submit" className="search__sbmt-btn"></button>
      <img src={searchLine} className="search__line" alt="линия"></img>
      <label className="switch">
        <input
          checked={isChecked}
          onChange={onCheckBox}
          type="checkbox"
          className="switch__checkbox"
        ></input>
        <span className="switch__slider round"></span>
        <span className="switch__span">Короткометражки</span>
      </label>
    </form>
  );
}
export default SearchForm;
