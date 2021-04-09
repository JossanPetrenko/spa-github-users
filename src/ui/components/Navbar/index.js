import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button, Tooltip} from 'antd';

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
import colors from 'infra/resources/colors';
import URl from 'infra/resources/urls';

function Navbar() {
  const history = useHistory();

  function handleAbout() {
    history.push(URl.APP.ABOUT);
  }

  function handleHome() {
    history.push(URl.APP.HOME);
  }

  return (
    <NavbarWrapper>
      <NavbarContent>
        <NavbarTitleWrapper onClick={() => handleHome()}>
          <Tooltip
            title={strings.comum.home}
            color={colors.blue500}
            placement={'right'}>
            <NavbarTitle>
              <NavbarIcon />
              {strings.app.name}
            </NavbarTitle>
          </Tooltip>
        </NavbarTitleWrapper>

        <NavbarButtonsWarpper>
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
