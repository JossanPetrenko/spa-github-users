import React from 'react';
import {useHistory} from 'react-router-dom';
import {Card, Avatar, Button} from 'antd';
import {StarTwoTone, SaveTwoTone} from '@ant-design/icons';

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

function UserCard({user}) {
  const history = useHistory();

  function handleRepositories(userLogin) {
    history.push(`/user/${userLogin}/repositories`);
  }

  function handleStared(userLogin) {
    history.push(`/user/${userLogin}/starred`);
  }
  return (
    <UserCardWrapper>
      <Card>
        <UserCardContent>
          <a
            target="_blank"
            style={{cursor: 'pointer'}}
            href={`https://github.com/${user.login}`}
            rel="noreferrer">
            <Avatar src={user.avatar_url} size={64} />
          </a>
          <UserCardInfoWrapper>
            <UserCardCollumWrapper flex={0.3}>
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

            <UserCardCollumWrapper flex={0.6}>
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
            <UserCardCollumWrapper flex={0.1}>
              <Button
                onClick={() => handleRepositories(user.login)}
                type="text"
                icon={<SaveTwoTone />}>
                {strings.users.repositories}
              </Button>

              <UserCardButtonDivider />

              <Button
                onClick={() => handleStared(user.login)}
                type="text"
                icon={<StarTwoTone />}>
                {strings.users.starred}
              </Button>
            </UserCardCollumWrapper>
          </UserCardInfoWrapper>
        </UserCardContent>
      </Card>
    </UserCardWrapper>
  );
}

export default UserCard;
