import React from 'react';
import {SaveTwoTone, StarTwoTone, LeftCircleTwoTone} from '@ant-design/icons';

import {UserInfoButtonsWrapper, UserInfoButton} from '../styles';

import strings from 'infra/resources/strings';

function UserInfoFooter({getRepositories, getStarreds, goBack}) {
  return (
    <UserInfoButtonsWrapper>
      <UserInfoButton
        size={'large'}
        onClick={() => getRepositories()}
        icon={<SaveTwoTone />}>
        {strings.users.repositorie_button}
      </UserInfoButton>
      <UserInfoButton
        size={'large'}
        onClick={() => getStarreds()}
        icon={<StarTwoTone />}>
        {strings.users.starred_button}
      </UserInfoButton>
      <UserInfoButton
        size={'large'}
        onClick={() => goBack()}
        icon={<LeftCircleTwoTone />}>
        {strings.comum.go_back}
      </UserInfoButton>
    </UserInfoButtonsWrapper>
  );
}

export default UserInfoFooter;
