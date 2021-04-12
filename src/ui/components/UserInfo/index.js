import React from 'react';
import {useHistory} from 'react-router-dom';

import SimpleCard from 'ui/components/SimpleCard';

import {UserInfoWrapper} from './styles';

import UserInfoFooter from './components/UserInfoFooter';
import UserInfoData from './components/UserInfoData';
import UserInfoTags from './components/UserInfoTags';
import UserInfoBio from './components/UserInfoBio';

function UserInfo({user = {}, getRepositories, getStarreds}) {
  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

  let {
    avatar_url,
    bio,
    blog,
    created_at,
    company,
    email,
    followers,
    following,
    hireable,
    html_url,
    location,
    login,
    name,
    public_gists,
    public_repos,
    updated_at,
  } = user;

  if (!user) {
    return;
  }

  return (
    <UserInfoWrapper>
      <SimpleCard>
        <UserInfoBio bio={bio} />

        <UserInfoData
          avatar_url={avatar_url}
          blog={blog}
          created_at={created_at}
          company={company}
          email={email}
          hireable={hireable}
          html_url={html_url}
          location={location}
          login={login}
          name={name}
          updated_at={updated_at}
        />

        <UserInfoTags
          followers={followers}
          following={following}
          public_gists={public_gists}
          public_repos={public_repos}
        />

        <UserInfoFooter
          getRepositories={() => getRepositories()}
          getStarreds={() => getStarreds()}
          goBack={() => handleGoBack()}
        />
      </SimpleCard>
    </UserInfoWrapper>
  );
}

export default UserInfo;
