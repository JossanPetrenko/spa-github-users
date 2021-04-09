import React from 'react';
import UserList from 'ui/components/UserList';
import UserSearch from 'ui/components/UserSearch';
import {HomeWrapper} from './styles';

function Home() {
  return (
    <HomeWrapper>
      <UserSearch />

      <UserList />
    </HomeWrapper>
  );
}

export default Home;
