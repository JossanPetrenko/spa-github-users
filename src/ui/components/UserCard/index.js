import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import {Card, Avatar, Button, Skeleton} from 'antd';
import {StarTwoTone, SaveTwoTone} from '@ant-design/icons';

import GithunLink from 'ui/components/GithubLink';

import {
  UserCardWrapper,
  UserCardLabel,
  UserCardValue,
  UserCardContent,
  UserCardInfoWrapper,
  UserCardCollumWrapper,
  UserCardButtonDivider,
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
      <UserCardWrapper>
        <Card>
          <UserCardContent>
            <GithunLink login={login}>
              <Avatar src={avatar_url} size={64} />
            </GithunLink>
            <UserCardInfoWrapper>
              <UserCardCollumWrapper flex={0.3}>
                <div>
                  <UserCardLabel>{strings.users.name}</UserCardLabel>
                  <UserCardValue>
                    {login || strings.comum.fallback_text}
                  </UserCardValue>
                </div>
                <div>
                  <UserCardLabel>{strings.users.score}</UserCardLabel>
                  <UserCardValue>
                    {score || strings.comum.fallback_text}
                  </UserCardValue>
                </div>

                <div>
                  <UserCardLabel>{strings.users.type}</UserCardLabel>
                  <UserCardValue>
                    {type || strings.comum.fallback_text}
                  </UserCardValue>
                </div>
              </UserCardCollumWrapper>

              <UserCardCollumWrapper flex={0.6}>
                <div>
                  <UserCardLabel>{strings.users.url}</UserCardLabel>
                  <UserCardValue>
                    {url || strings.comum.fallback_text}
                  </UserCardValue>
                </div>
                <div>
                  <UserCardLabel>{strings.users.id}</UserCardLabel>
                  <UserCardValue>
                    {id || strings.comum.fallback_text}
                  </UserCardValue>
                </div>
                <div>
                  <UserCardLabel>{strings.users.node_id}</UserCardLabel>
                  <UserCardValue>
                    {node_id || strings.comum.fallback_text}
                  </UserCardValue>
                </div>
              </UserCardCollumWrapper>
              <UserCardCollumWrapper flex={0.1}>
                <Button
                  onClick={() => handleUser(login)}
                  type="text"
                  icon={<SaveTwoTone />}>
                  {strings.users.repositories}
                </Button>

                <UserCardButtonDivider />
              </UserCardCollumWrapper>
            </UserCardInfoWrapper>
          </UserCardContent>
        </Card>
      </UserCardWrapper>
    </Fragment>
  );
}

export default UserCard;

export function SkeletonUserCard() {
  return (
    <UserCardWrapper>
      <Card>
        <Skeleton active paragraph={{rows: 2}} avatar={{size: 64}} />
      </Card>
    </UserCardWrapper>
  );
}
