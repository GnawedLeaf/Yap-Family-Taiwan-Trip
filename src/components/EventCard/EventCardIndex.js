import React, { useState } from "react";
import { SubEventContainer, SubEventPicture, SubEventTitle, SubEventDescription, SubEventLocation, EventContainer, EventCard, EventPicture, EventTitle, EventAndSubeventContainer, TransitionContainer, TransitionImage } from "./EventCardStyles";


const EventCardComponent = (props) => {

  const eventData = props.subEvents;
  const mainPicture = props.mainPicture
  const mainTitle = props.mainTitle

  const [showStack, setShowStack] = useState(false);
  const [spreadStack, setSpreadStack] = useState(false);

  const handleMouseEnterEventCard = () => {
    setShowStack(true);
  }

  const handleMouseLeaveEventCard = () => {
    setShowStack(false);
  }

  const handleEventCardClick = () => {
    setSpreadStack(!spreadStack)
  }

  const [foodCardClicked, setFoodCardClicked] = useState(false);
  const [fullPicture, setFullPicutre] = useState(eventData[0].subEventPic);

  const handlePictureClick = (index) => {
    setFoodCardClicked(true);
    setFullPicutre(eventData[0].subEventPic)
  }

  return (
    <EventContainer>
      {props.children}
      <EventAndSubeventContainer spread={spreadStack}>
        <EventCard zIndex={eventData.length + 2} onMouseEnter={handleMouseEnterEventCard} onMouseLeave={handleMouseLeaveEventCard} onClick={handleEventCardClick} spread={spreadStack}>
          <EventPicture src={mainPicture} />
          <EventTitle>
            {mainTitle}
          </EventTitle>
        </EventCard>
        {eventData.map((subEvent, index) => (
          <SubEventContainer spread={spreadStack} display={showStack || spreadStack} zIndex={eventData.length - index + 1} index={index + 1}>
            <SubEventPicture onClick={() => {
              handlePictureClick(index)
            }} src={subEvent.subEventPic} />
            <SubEventTitle>{subEvent.subEventTitle}</SubEventTitle>
            <SubEventDescription>{subEvent.subEventDescription} </SubEventDescription>
            <SubEventLocation href={subEvent.subEventLocationhref} target="_blank">
              {subEvent.subEventLocation}
            </SubEventLocation>

          </SubEventContainer>

        ))}
      </EventAndSubeventContainer>
      <TransitionContainer clicked={foodCardClicked} onClick={() => {
        setFoodCardClicked(false)
      }}>
        <TransitionImage src={fullPicture} />
      </TransitionContainer>

    </EventContainer>
  )
}

export default EventCardComponent;