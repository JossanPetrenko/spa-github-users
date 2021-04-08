import React from 'react';

import {
  NavbarWrapper,
  NavbarTitle,
  NavbarIcon,
  NavbarButtonsWarpper,
  ArrowRight,
} from './styles';

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
          <span>Sobre</span>
        </NavbarButtonsWarpper>
      </NavbarWrapper>

      <ArrowRight />
    </>
  );
}

export default Navbar;
