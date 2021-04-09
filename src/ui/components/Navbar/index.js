import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from 'antd';

import {
  NavbarWrapper,
  NavbarContent,
  NavbarTitle,
  NavbarIcon,
  NavbarButtonsWarpper,
  ArrowRight,
  NavbarTitleWrapper,
  NavLinkWrapper,
} from './styles';
import strings from 'infra/resources/strings';

function Navbar() {
  const history = useHistory();

  function handleAbout() {
    history.push('/about');
  }

  function handleHome() {
    history.push('/home');
  }

  return (
    <NavbarWrapper>
      <NavbarContent>
        <NavbarTitleWrapper onClick={() => handleHome()}>
          <NavbarTitle>
            <NavbarIcon />
            {strings.app.name}
          </NavbarTitle>
        </NavbarTitleWrapper>

        <NavbarButtonsWarpper>
          <Button
            style={{marginRight: '10px'}}
            type={'link'}
            onClick={() => handleHome()}>
            <NavLinkWrapper>{strings.comum.home}</NavLinkWrapper>
          </Button>
          <Button onClick={() => handleAbout()} type={'link'}>
            <NavLinkWrapper>{strings.comum.about}</NavLinkWrapper>
          </Button>
        </NavbarButtonsWarpper>
      </NavbarContent>

      <ArrowRight />
    </NavbarWrapper>
  );
}

export default Navbar;
