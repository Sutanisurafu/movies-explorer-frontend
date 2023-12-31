import React from "react";
import Promo from '../Promo/Promo'
import AbouteProject from '../AboutProject/AbouteProject'
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import moviesApi from "../../utils/MoviesApi";


function Main() {

  return (
    <main>
      <Promo/>
      <AbouteProject/>
      <Techs/>
      <AboutMe/>
    </main>
  )
}

export default Main;