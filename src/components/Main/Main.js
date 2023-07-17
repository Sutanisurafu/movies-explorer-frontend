import React from "react";
import { NavLink } from "react-router-dom";
import Promo from '../Promo/Promo'
import AbouteProject from '../AboutProject/AbouteProject'
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import { movies } from "../../utils/constants.js"


function Main() {

  return (
    <>
      <Promo/>
      <AbouteProject/>
      <Techs/>
      <AboutMe/>
    </>
  )
}

export default Main;