import React from "react";
import { FooterContainer, FooterItem, FooterItemContainer } from "./FooterStyles";
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const Footer = (props) => {



  return (
    <FooterContainer>

      <FooterItemContainer display={props.leftAppear} side={0}>
        <BsArrowLeft style={{ marginTop: "0.4vh", marginRight: "0.4vw" }} />
        <FooterItem onClick={props.onPrevClick}>
          Prev Day
        </FooterItem>
      </FooterItemContainer>
      <FooterItemContainer display={props.rightAppear} side={1}>
        <FooterItem onClick={props.onNextClick}>
          Next Day
        </FooterItem>
        <BsArrowRight style={{ marginTop: "0.4vh", marginLeft: "0.4vw" }} />
      </FooterItemContainer>
    </FooterContainer>
  )
}

export default Footer