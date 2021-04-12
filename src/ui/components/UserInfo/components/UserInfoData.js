import React from 'react';

import {Avatar} from 'antd';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';

import GithunLink from 'ui/components/GithubLink';
import SimpleCard from 'ui/components/SimpleCard';

import {
  UserInfoLabel,
  UserInfoValue,
  UserInfoRowValue,
  UserInfoHeaderWrapper,
  UserInfoHeaderColumnLeft,
  UserInfoHeaderColumnRight,
  UserInfoName,
} from '../styles';

import strings from 'infra/resources/strings';
import colors from 'infra/resources/colors';

function UserInfoData({
  login,
  avatar_url,
  name,
  location,
  hireable,
  company,
  email,
  blog,
  html_url,
  created_at,
  updated_at,
}) {
  function renderHirable(hireable) {
    if (hireable) {
      return <CheckOutlined style={{color: colors.green500}} />;
    } else {
      return <CloseOutlined style={{color: colors.red500}} />;
    }
  }
  return (
    <SimpleCard>
      <UserInfoHeaderWrapper>
        <UserInfoHeaderColumnLeft>
          <GithunLink login={login}>
            <Avatar src={avatar_url} size={128} />
          </GithunLink>
          <UserInfoName>{name || strings.fallback_text}</UserInfoName>
          <div>
            <UserInfoLabel>{strings.users.location}</UserInfoLabel>
            <UserInfoValue>{location || strings.fallback_text}</UserInfoValue>
          </div>
          <div>
            <UserInfoLabel>{strings.users.hireable}</UserInfoLabel>
            {renderHirable(hireable)}
          </div>
        </UserInfoHeaderColumnLeft>
        <UserInfoHeaderColumnRight>
          <UserInfoRowValue>
            <UserInfoLabel>{strings.users.company}</UserInfoLabel>
            <UserInfoValue>{company || strings.fallback_text}</UserInfoValue>
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
            <UserInfoValue>{html_url || strings.fallback_text}</UserInfoValue>
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
  );
}

export default UserInfoData;
