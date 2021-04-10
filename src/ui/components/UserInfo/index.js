import React from 'react';
import {useHistory} from 'react-router-dom';
import {Avatar, Button} from 'antd';
import {} from '@ant-design/icons';

import GithunLink from 'ui/components/GithubLink';
import SimpleCard from 'ui/components/SimpleCard';

import {UserInfoWrapper} from './styles';

import strings from 'infra/resources/strings';

function UserInfo({user = {}, getRepositories, getStarreds}) {
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  const {
    avatar_url,
    bio,
    blog,
    company,
    followers,
    following,
    hireable,
    html_url,
    location,
    login,
    name,
    public_gists,
    public_repos,
  } = user;

  if (!user) {
    return;
  }

  return (
    <UserInfoWrapper>
      <SimpleCard>
        <GithunLink login={login}>
          <Avatar src={avatar_url} size={128} />
        </GithunLink>
        <div>name :{name || strings.fallback_text}</div>
        <div>company :{company || strings.fallback_text}</div>
        <div>location :{location || strings.fallback_text}</div>
        <div>bio :{bio || strings.fallback_text}</div>
        <div>blog :{blog || strings.fallback_text}</div>
        <div>html_url :{html_url || strings.fallback_text}</div>
        <div>followers :{followers || strings.fallback_text}</div>
        <div>following :{following || strings.fallback_text}</div>
        <div>public_repos :{public_repos || strings.fallback_text}</div>
        <div>public_gists :{public_gists || strings.fallback_text}</div>
        <div>hireable :{hireable?.toString()}</div>

        <Button onClick={() => handleBack()}>Go Back</Button>
        <Button onClick={() => getRepositories()}>
          See public repositories
        </Button>
        <Button onClick={() => getStarreds()}>See starred repositories</Button>
      </SimpleCard>
    </UserInfoWrapper>
  );
}

export default UserInfo;
