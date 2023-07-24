import React from "react";
import searchIcon from "../../images/search-icon.png"
import searchBtn from "../../images/find.svg"
import searchLine from "../../images/search-form__line.svg"

function SearchForm() {
  return (
<form className="search__container">
  <input className="search__input" type="text" placeholder="Фильм" name="search" required="true"></input>
  <img className="search__image" src={searchIcon} alt="лупа"></img>
  <button type="submit" className="search__sbmt-btn"></button>
  <img src={searchLine} className="search__line" alt="линия"></img>
  <label className="switch">
    <input type="checkbox" className="switch__checkbox"></input>
    <span className="switch__slider round"></span>
    <span className="switch__span">Короткометражки</span>
</label>
</form>
  )
}
export default SearchForm;