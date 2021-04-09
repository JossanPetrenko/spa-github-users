import React, {useContext} from 'react';

import UserCard from 'ui/components/UserCard';
import GithubContext from 'context/github/githubContext';

function UserList() {
  const githubContext = useContext(GithubContext);

  const {loading, users} = githubContext;

  if (loading) {
    return <></>;
  }
  return (
    <>
      <div>
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </>
  );
}

export default UserList;
