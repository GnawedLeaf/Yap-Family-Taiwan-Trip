import React from "react";
import { NavbarContainer } from "./NavbarStyles";
import { BsArrowUpCircle } from 'react-icons/bs';

const Navbar = (props) => {
  return (
    <NavbarContainer display={props.display}>
      <BsArrowUpCircle onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }} style={{ zIndex: "999", color: "#333333", fontSize: '2rem', cursor: "pointer" }} />
    </NavbarContainer>
  )
}

export default Navbar;