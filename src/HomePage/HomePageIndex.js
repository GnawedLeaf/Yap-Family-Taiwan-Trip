import React, { useEffect, useState, useRef } from "react";
import { BigContainer, HeroContainer, HeroTitle, Day1Container, DayTitle, MiddleLine, HorizontalLine } from "./HomePageStyles";
import HeroPicture from "../assets/HeroPicture.jpg"
import Navbar from "../components/Navbar/NavbarIndex";

const Home = () => {
  //Intersection Observer
  const elementRef = useRef(null);
  const [elementIntersected, setElementIntersected] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          setElementIntersected(true);
        }
        else {
          setElementIntersected(false)
        }
      },
      {
        rootMargin: '-250px',
        threshold: 0.1,
      }
    );

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };

  }, [elementIntersected]);
  return (
    <>
      <Navbar display={false} />
      <BigContainer>
        <HeroContainer src={HeroPicture}>
          <HeroTitle>
            Yap Family Taiwan Trip
          </HeroTitle>
        </HeroContainer>

        <Day1Container ref={elementRef}>

          <DayTitle >
            Day 1
          </DayTitle>
          <MiddleLine fadeDown={elementIntersected} />
          <DayTitle >
            Day 2
          </DayTitle>
          <MiddleLine fadeDown={elementIntersected} />
          <DayTitle >
            Day 3
          </DayTitle>
        </Day1Container>
      </BigContainer>
    </>
  )
}

export default Home;