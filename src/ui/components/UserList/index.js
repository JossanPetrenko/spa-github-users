import React, {useContext} from 'react';

import UserCard, {SkeletonUserCard} from 'ui/components/UserCard';
import GithubContext from 'context/github/githubContext';

function UserList() {
  const githubContext = useContext(GithubContext);

  const {loading, users} = githubContext;

  if (loading) {
    return (
      <>
        <SkeletonUserCard />
      </>
    );
  }
  return (
    <>
      {users.map((user, index) => (
        <UserCard user={user} cardId={index} />
      ))}
    </>
  );
}

export default UserList;
