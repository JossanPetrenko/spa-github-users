import React from 'react';
import {useHistory} from 'react-router-dom';
import {Avatar} from 'antd';
import {
  SaveTwoTone,
  StarTwoTone,
  LeftCircleTwoTone,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';

import GithunLink from 'ui/components/GithubLink';
import SimpleCard from 'ui/components/SimpleCard';

import {
  UserInfoWrapper,
  UserInfoLabel,
  UserInfoValue,
  UserInfoRowValue,
  UserInfoHeaderWrapper,
  UserInfoHeaderColumnLeft,
  UserInfoHeaderColumnRight,
  UserInfoName,
  UserInfoTagsWrapper,
  UserInfoButtonsWrapper,
  UserInfoButton,
  UserInfoTag,
} from './styles';

import strings from 'infra/resources/strings';
import colors from 'infra/resources/colors';

function UserInfo({user = {}, getRepositories, getStarreds}) {
  const history = useHistory();

  function handleBack() {
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

  function renderHirable(hireable) {
    if (hireable) {
      return <CheckOutlined style={{color: colors.green500}} />;
    } else {
      return <CloseOutlined style={{color: colors.red500}} />;
    }
  }

  return (
    <UserInfoWrapper>
      <SimpleCard>
        {bio ? (
          <SimpleCard>
            <h3>{bio || strings.fallback_text}</h3>
          </SimpleCard>
        ) : null}

        <SimpleCard>
          <UserInfoHeaderWrapper>
            <UserInfoHeaderColumnLeft>
              <GithunLink login={login}>
                <Avatar src={avatar_url} size={128} />
              </GithunLink>
              <UserInfoName>{name || strings.fallback_text}</UserInfoName>
              <div>
                <UserInfoLabel>{strings.users.location}</UserInfoLabel>
                <UserInfoValue>
                  {location || strings.fallback_text}
                </UserInfoValue>
              </div>
              <div>
                <UserInfoLabel>{strings.users.hireable}</UserInfoLabel>
                {renderHirable(hireable)}
              </div>
            </UserInfoHeaderColumnLeft>
            <UserInfoHeaderColumnRight>
              <UserInfoRowValue>
                <UserInfoLabel>{strings.users.company}</UserInfoLabel>
                <UserInfoValue>
                  {company || strings.fallback_text}
                </UserInfoValue>
              </UserInfoRowValue>
              <UserInfoRowValue>
                <UserInfoLabel> {strings.users.email} </UserInfoLabel>
                <UserInfoValue>{email || strings.fallback_text}</UserInfoValue>
              </UserInfoRowValue>

              <UserInfoRowValue>
                <UserInfoLabel>{strings.users.blog}</UserInfoLabel>
                <UserInfoValue>{blog || strings.fallback_text}</UserInfoValue>
              </UserInfoRowValue>
              <UserInfoRowValue>
                <UserInfoLabel>{strings.users.github}</UserInfoLabel>
                <UserInfoValue>
                  {html_url || strings.fallback_text}
                </UserInfoValue>
              </UserInfoRowValue>
              <UserInfoRowValue>
                <UserInfoLabel>{strings.users.created_at}</UserInfoLabel>
                <UserInfoValue>
                  {created_at?.substring(0, 10) || strings.fallback_text}
                </UserInfoValue>
              </UserInfoRowValue>
              <UserInfoRowValue>
                <UserInfoLabel>{strings.users.updated_at}</UserInfoLabel>
                <UserInfoValue>
                  {updated_at?.substring(0, 10) || strings.fallback_text}
                </UserInfoValue>
              </UserInfoRowValue>
            </UserInfoHeaderColumnRight>
          </UserInfoHeaderWrapper>
        </SimpleCard>
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
            onClick={() => handleBack()}
            icon={<LeftCircleTwoTone />}>
            {strings.comum.go_back}
          </UserInfoButton>
        </UserInfoButtonsWrapper>
      </SimpleCard>
    </UserInfoWrapper>
  );
}

export default UserInfo;
