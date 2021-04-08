import React from "react";
import {
  NavbarWrapper,
  NavbarTitle,
  NavbarButtonsWarpper,
  ArrowRight,
} from "./styles";
import { NavbarIcon } from "./styles";

function Navbar() {
  return (
    <>
      <NavbarWrapper>
        <NavbarTitle>
          <NavbarIcon />
          Find user
        </NavbarTitle>

        <NavbarButtonsWarpper>
          <span>Home - </span>
          <span>About</span>
        </NavbarButtonsWarpper>
      </NavbarWrapper>

      <ArrowRight />
    </>
  );
}

export default Navbar;
