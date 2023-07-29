import React from "react";
import searchIcon from "../../images/search-icon.png"
import searchLine from "../../images/search-form__line.svg"
import useForm from "../../hooks/useForm";

function SearchForm({ onSearch, clickCheckBox, isChecked }) {
  const searchInputValue = localStorage.getItem('searchValue');
  const [inputValue, setInputValue] = React.useState(searchInputValue)
  const { form, errors, handleChange } = useForm ({
    searhValue: "",
  })



  React.useEffect(() => {
    if (!!searchInputValue) {
      setInputValue(searchInputValue);
    }
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(e.target.search.value)
  }

  return (
<form className="search__container" onSubmit={handleSubmit}>
  <input defaultValue={inputValue} onChange={handleChange} className="search__input" type="text" placeholder="Фильм" name="search" required={true}></input>
  <img className="search__image" src={searchIcon} alt="лупа"></img>
  <button type="submit" className="search__sbmt-btn"></button>
  <img src={searchLine} className="search__line" alt="линия"></img>
  <label className="switch">
    <input checked={isChecked} onChange={clickCheckBox} type="checkbox" className="switch__checkbox"></input>
    <span className="switch__slider round"></span>
    <span className="switch__span">Короткометражки</span>
</label>
</form>
  )
}
export default SearchForm;