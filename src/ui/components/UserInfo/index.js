import React from 'react';
import {useHistory} from 'react-router-dom';
import {Card, Avatar, Button} from 'antd';
import {} from '@ant-design/icons';

import GithunLink from 'ui/components/GithubLink';

import {UserInfoWrapper} from './styles';

import strings from 'infra/resources/strings';

function UserInfo({user, getRepositories, getStarreds}) {
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  return (
    <UserInfoWrapper>
      <Card>
        <GithunLink login={login}>
          <Avatar src={avatar_url} size={128} />
        </GithunLink>
        <div>name :{name || strings.comum.fallback_text}</div>
        <div>company :{company || strings.comum.fallback_text}</div>
        <div>location :{location || strings.comum.fallback_text}</div>
        <div>bio :{bio || strings.comum.fallback_text}</div>
        <div>blog :{blog || strings.comum.fallback_text}</div>
        <div>html_url :{html_url || strings.comum.fallback_text}</div>
        <div>followers :{followers || strings.comum.fallback_text}</div>
        <div>following :{following || strings.comum.fallback_text}</div>
        <div>public_repos :{public_repos || strings.comum.fallback_text}</div>
        <div>public_gists :{public_gists || strings.comum.fallback_text}</div>
        <div>hireable :{hireable?.toString()}</div>

        <Button onClick={() => handleBack()}>Go Back</Button>
        <Button onClick={() => getRepositories()}>
          See public repositories
        </Button>
        <Button onClick={() => getStarreds()}>See starred repositories</Button>
      </Card>
    </UserInfoWrapper>
  );
}

export default UserInfo;
