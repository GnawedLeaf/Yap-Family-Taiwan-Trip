import React from "react";
import { BigContainer, HeroContainer, HeroTitle } from "./HomePageStyles";
import HeroPicture from "../assets/HeroPicture.jpg"

const Home = () => {
  return (
    <BigContainer>
      <HeroContainer src={HeroPicture}>
        <HeroTitle>
          Yap Family Taiwan Trip
        </HeroTitle>
      </HeroContainer>
    </BigContainer>
  )
}

export default Home;