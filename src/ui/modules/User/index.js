import React, {useEffect, useContext} from 'react';

import UserInfo from 'ui/components/UserInfo';
import GithubContext from 'context/github/githubContext';

import {} from './styles';

function User({match}) {
  const githubContext = useContext(GithubContext);

  const {getUser, loading, user, repos, getUserRepos} = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <UserInfo user={user} />
    </>
  );
}

export default User;
