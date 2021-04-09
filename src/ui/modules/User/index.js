import React, {useEffect, useContext} from 'react';

import UserInfo from 'ui/components/UserInfo';
import RepositorieList from 'ui/components/RepositorieList';
import StarredList from 'ui/components/StarredList';

import GithubContext from 'context/github/githubContext';

import {} from './styles';

function User({match}) {
  const githubContext = useContext(GithubContext);

  const {
    loading,
    repositories,
    starreds,
    user,

    getUser,
    getUserRepositories,
    getUserStarreds,
    clearRepositories,
    clearStarreds,
  } = githubContext;

  useEffect(() => {
    clearRepositories();
    clearStarreds();
    getUser(match.params?.login);
    // eslint-disable-next-line
  }, []);

  function handleRepositories() {
    getUserRepositories(match.params?.login);
    return;
  }

  function handleStarreds() {
    getUserStarreds(match.params?.login);
    return;
  }

  return (
    <div style={{flexDirection: 'column'}}>
      <UserInfo
        user={user}
        getRepositories={handleRepositories}
        getStarreds={handleStarreds}
      />
      {repositories.length >= 1 ? (
        <RepositorieList repositories={repositories} />
      ) : null}

      {starreds.length >= 1 ? <StarredList starreds={starreds} /> : null}
    </div>
  );
}

export default User;
