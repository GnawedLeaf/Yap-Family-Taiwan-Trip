import React, { useEffect, useState, useRef } from "react";
import { BigContainer, HeroContainer, HeroTitle, Day1Container, DayTitle, MiddleLine, HorizontalLine, DaySubtitle, TimeTitle, NamesSubtitle, BacktoTopTitle } from "./HomePageStyles";
import HeroPicture from "../assets/HeroPicture.jpg"
import Navbar from "../components/Navbar/NavbarIndex";
import Footer from "../components/Footer/FooterIndex";
import { DongMenBreakfast, DaanThings, Day1Afternoon, Day1Evening } from "./Eventsdata/EventsData";
import EventCardComponent from "../components/EventCard/EventCardIndex";
import dongmenmarket from "./Eventsdata/assets/DongmenBreakfast/dongmenmarket.jpg"
import { concatenateToResponse } from "workbox-streams";


const Home = () => {

  const MOBILE_LINE_LENGTH = "10rem";
  const DESKTOP_LINE_LENGTH = "20vh";

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

  // useEffect(() => {
  //   // 👇️ scroll to top on page load
  //   window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  // }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }


  //Page Handler
  const MAX_PAGE = 5;
  const [pageNum, setPageNum] = useState(1);
  const handleNextPageClick = () => {
    if (pageNum === MAX_PAGE) {
      setPageNum(MAX_PAGE)
    }
    else {
      setPageNum(pageNum + 1)
    }
  }
  const handlePrevPageClick = () => {
    if (pageNum <= 1) {
      setPageNum(1)
    }
    else {
      setPageNum(pageNum - 1)
    }

  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pageNum])

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
          <MiddleLine height={mobileWindow ? MOBILE_LINE_LENGTH : DESKTOP_LINE_LENGTH} fadeDown={elementIntersected} />
          <TimeTitle fadeDown={elementIntersected}>
            Morning
          </TimeTitle>
          <NamesSubtitle fadeDown={elementIntersected}>
            Nat and Ryan
          </NamesSubtitle>

          <EventCardComponent
            mainTitle={"Breakfast At Dong Men Market"}
            mainPicture={dongmenmarket}
            subEvents={DongMenBreakfast}
          >
          </EventCardComponent>

          <MiddleLine height={mobileWindow ? MOBILE_LINE_LENGTH : DESKTOP_LINE_LENGTH} fadeDown={elementIntersected} />
          <TimeTitle fadeDown={elementIntersected}>
            Late Morning
          </TimeTitle>
          <NamesSubtitle fadeDown={elementIntersected}>
            Nat and Ryan
          </NamesSubtitle>

          <EventCardComponent
            mainTitle={"Chill Around Daan"}
            mainPicture={HeroPicture}
            subEvents={DaanThings}
          >
          </EventCardComponent>

          <MiddleLine height={mobileWindow ? MOBILE_LINE_LENGTH : DESKTOP_LINE_LENGTH} fadeDown={elementIntersected} />
          <TimeTitle fadeDown={elementIntersected}>
            Afternoon
          </TimeTitle>
          <NamesSubtitle fadeDown={elementIntersected}>
            Everyone
          </NamesSubtitle>
          <EventCardComponent
            mainTitle={"Seeing all the Tourist Hotspots"}
            mainPicture={HeroPicture}
            subEvents={Day1Afternoon}
          >
          </EventCardComponent>

          <MiddleLine height={mobileWindow ? MOBILE_LINE_LENGTH : DESKTOP_LINE_LENGTH} fadeDown={elementIntersected} />
          <TimeTitle fadeDown={elementIntersected}>
            Evening
          </TimeTitle>
          <NamesSubtitle fadeDown={elementIntersected}>
            Everyone
          </NamesSubtitle>
          <EventCardComponent
            mainTitle={"Night Market, Ximen and Chilling At The Pier"}
            mainPicture={HeroPicture}
            subEvents={Day1Evening}
          >
          </EventCardComponent>
          <MiddleLine height={mobileWindow ? MOBILE_LINE_LENGTH : DESKTOP_LINE_LENGTH} fadeDown={elementIntersected} />
          <TimeTitle fadeDown={elementIntersected}>
            End of Day 1
          </TimeTitle>
          <BacktoTopTitle onClick={scrollToTop} fadeDown={elementIntersected}>
            Back to top
          </BacktoTopTitle>



        </Day1Container>
        {/* <Footer onNextClick={handleNextPageClick} onPrevClick={handlePrevPageClick} leftAppear={pageNum === 1 ? false : true} rightAppear={pageNum === MAX_PAGE ? false : true} /> */}
      </BigContainer>
    </>
  )
}

export default Home;