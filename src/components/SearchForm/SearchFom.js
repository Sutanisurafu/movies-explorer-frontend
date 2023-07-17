import React from "react";
import searchIcon from "../../images/search-icon.png"
import searchBtn from "../../images/find.svg"

function SearchForm() {
  return (
<div className="search__container">
  <input className="search__input" type="text" placeholder="Фильм" name="search"></input>
  <img className="search__image" src={searchIcon} alt="лупа"></img>
  <button type="submit" className="search__sbmt-btn"></button>
  <hr className="search__line"></hr>
  {/* <button type="submit" class="search__filter-btn">Короткометражки</button> */}
  <label class="switch">
    <input type="checkbox" className="switch__checkbox"></input>
    <span className="switch__slider round"></span>
    <span className="switch__span">Короткометражки</span>
</label>
</div>
  )
}
export default SearchForm;