import React from 'react';

import SimpleCard from 'ui/components/SimpleCard';
import {UserInfoTagsWrapper, UserInfoTag} from '../styles';

import strings from 'infra/resources/strings';

function UserInfoTags({followers, following, public_repos, public_gists}) {
  return (
    <SimpleCard>
      <UserInfoTagsWrapper>
        <UserInfoTag color={'processing'}>
          {strings.users.followers}
          {` `}
          {followers || strings.fallback_text}
        </UserInfoTag>
        <UserInfoTag color={'processing'}>
          {strings.users.following}
          {` `}
          {following || strings.fallback_text}
        </UserInfoTag>
        <UserInfoTag color={'processing'}>
          {strings.users.public_repositories}
          {` `}
          {public_repos || strings.fallback_text}
        </UserInfoTag>
        <UserInfoTag color={'processing'}>
          {strings.users.public_gist}
          {` `}
          {public_gists || strings.fallback_text}
        </UserInfoTag>
      </UserInfoTagsWrapper>
    </SimpleCard>
  );
}

export default UserInfoTags;
