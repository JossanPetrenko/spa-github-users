import React from 'react';
import {Card, Avatar, Button} from 'antd';

import {
  UserCardWrapper,
  UserCardLabel,
  UserCardValue,
  UserCardContent,
  UserCardInfoWrapper,
  UserCardCollumWrapper,
} from './styles';

import strings from 'infra/resources/strings';

function UserCard({user}) {
  return (
    <UserCardWrapper>
      <Card>
        <UserCardContent>
          <Avatar src={user.avatar_url} size={64} />
          <UserCardInfoWrapper>
            <UserCardCollumWrapper>
              <div>
                <UserCardLabel>{strings.users.user_name}</UserCardLabel>
                <UserCardValue>{user.login}</UserCardValue>
              </div>
              <div>
                <UserCardLabel>{strings.users.score}</UserCardLabel>
                <UserCardValue>{user.score}</UserCardValue>
              </div>

              <div>
                <UserCardLabel>{strings.users.type}</UserCardLabel>
                <UserCardValue>{user.type}</UserCardValue>
              </div>
            </UserCardCollumWrapper>

            <UserCardCollumWrapper>
              <div>
                <UserCardLabel>{strings.users.url}</UserCardLabel>
                <UserCardValue>{user.url}</UserCardValue>
              </div>
              <div>
                <UserCardLabel>{strings.users.id}</UserCardLabel>
                <UserCardValue>{user.id}</UserCardValue>
              </div>
              <div>
                <UserCardLabel>{strings.users.node_id}</UserCardLabel>
                <UserCardValue>{user.node_id}</UserCardValue>
              </div>
            </UserCardCollumWrapper>
          </UserCardInfoWrapper>
        </UserCardContent>
        <Button>{strings.comum.details}</Button>
      </Card>
    </UserCardWrapper>
  );
}

export default UserCard;
