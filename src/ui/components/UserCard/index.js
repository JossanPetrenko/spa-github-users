import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import {Avatar, Button, Skeleton} from 'antd';
import {GithubOutlined} from '@ant-design/icons';

import GithubLink from 'ui/components/GithubLink';
import SimpleCard from 'ui/components/SimpleCard';

import {
  UserCardLabel,
  UserCardValue,
  UserCardContent,
  UserCardInfoWrapper,
  UserCardCollumWrapper,
} from './styles';

import strings from 'infra/resources/strings';
import URL from 'infra/resources/urls';

function UserCard({user, cardId}) {
  const history = useHistory();

  function handleUser(userLogin) {
    history.push(URL.APP.USER(userLogin));
  }

  const {
    avatar_url,

    login,
    score,
    type,
    url,
    id,
    node_id,
  } = user;
  return (
    <Fragment key={cardId}>
      <SimpleCard>
        <UserCardContent>
          <GithubLink login={login}>
            <Avatar src={avatar_url} size={64} />
          </GithubLink>
          <UserCardInfoWrapper>
            <UserCardCollumWrapper flex={0.3}>
              <div>
                <UserCardLabel>{strings.users.name}</UserCardLabel>
                <UserCardValue>{login || strings.fallback_text}</UserCardValue>
              </div>
              <div>
                <UserCardLabel>{strings.users.score}</UserCardLabel>
                <UserCardValue>{score || strings.fallback_text}</UserCardValue>
              </div>

              <div>
                <UserCardLabel>{strings.users.type}</UserCardLabel>
                <UserCardValue>{type || strings.fallback_text}</UserCardValue>
              </div>
            </UserCardCollumWrapper>

            <UserCardCollumWrapper flex={0.6}>
              <div>
                <UserCardLabel>{strings.users.url}</UserCardLabel>
                <UserCardValue>{url || strings.fallback_text}</UserCardValue>
              </div>
              <div>
                <UserCardLabel>{strings.users.id}</UserCardLabel>
                <UserCardValue>{id || strings.fallback_text}</UserCardValue>
              </div>
              <div>
                <UserCardLabel>{strings.users.node_id}</UserCardLabel>
                <UserCardValue>
                  {node_id || strings.fallback_text}
                </UserCardValue>
              </div>
            </UserCardCollumWrapper>
            <UserCardCollumWrapper flex={0.1}>
              <Button
                style={{height: '64px', fontSize: 20}}
                onClick={() => handleUser(login)}
                type="text"
                icon={<GithubOutlined />}>
                {strings.comum.details}
              </Button>
            </UserCardCollumWrapper>
          </UserCardInfoWrapper>
        </UserCardContent>
      </SimpleCard>
    </Fragment>
  );
}

export default UserCard;

export function SkeletonUserCard() {
  return (
    <SimpleCard>
      <Skeleton active paragraph={{rows: 2}} avatar={{size: 64}} />
    </SimpleCard>
  );
}
