import React, { useEffect, useState, useRef } from "react";
import { BigContainer, HeroContainer, HeroTitle, Day1Container, DayTitle, MiddleLine, HorizontalLine, DaySubtitle, TimeTitle, NamesSubtitle } from "./HomePageStyles";
import HeroPicture from "../assets/HeroPicture.jpg"
import Navbar from "../components/Navbar/NavbarIndex";
import { DongMenBreakfast } from "./EventsData";
import EventCardComponent from "../components/EventCard/EventCardIndex";

const Home = () => {

  //Desktop or Mobile Checker
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileWindow, setMobileWindow] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    //Return is meant to remove the handler after its done
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 750) {
      setMobileWindow(false)
    }
    else {
      setMobileWindow(true)
    }

  }, [windowWidth])


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
        rootMargin: '-40%',
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
          <DaySubtitle>
            Taipei
          </DaySubtitle>
          <MiddleLine height={mobileWindow ? "5rem" : "20vh"} fadeDown={elementIntersected} />
          <TimeTitle fadeDown={elementIntersected}>
            Morning
          </TimeTitle>
          <NamesSubtitle fadeDown={elementIntersected}>
            Nat and Ryan
          </NamesSubtitle>

          <EventCardComponent
            mainTitle={"Breakfast At 東門"}
            mainPicture={HeroPicture}
            subEvents={DongMenBreakfast}
          >
          </EventCardComponent>

          <EventCardComponent
            mainTitle={"Breakfast At 東門"}
            mainPicture={HeroPicture}
            subEvents={DongMenBreakfast}
          >
          </EventCardComponent>



        </Day1Container>

      </BigContainer>
    </>
  )
}

export default Home;