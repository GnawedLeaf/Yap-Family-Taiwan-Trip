import React from "react";
import { NavbarContainer, NavbarItem } from "./NavbarStyles";

const Navbar = (props) => {
  return (
    <NavbarContainer display={props.display}>
      <NavbarItem>
        Home
      </NavbarItem>
      <NavbarItem>
        Album
      </NavbarItem>

    </NavbarContainer>
  )
}

export default Navbar;