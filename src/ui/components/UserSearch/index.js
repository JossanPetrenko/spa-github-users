import React, {useState, useContext} from 'react';
import {Input, Alert} from 'antd';

import GithubContext from 'context/github/githubContext';
import {SearchUserWrapper, AlertWrapper} from './styles';

import strings from 'infra/resources/strings';

const {Search} = Input;

function UserSearch() {
  const githubContext = useContext(GithubContext);
  const {loading} = githubContext;

  const [user, setUser] = useState('');
  const [alert, setAlert] = useState(false);

  function handleSearch() {
    if (!user) {
      setAlert(true);
      return;
    }

    githubContext.searchUsers(user);
    setUser('');
  }

  function handleCloseAlert() {
    setAlert(false);
  }

  return (
    <SearchUserWrapper>
      <Search
        placeholder={strings.users.search_input_placeholder}
        enterButton={strings.comum.search}
        size="large"
        loading={loading}
        onChange={(e) => setUser(e.target.value)}
        value={user}
        onPressEnter={() => handleSearch()}
        onSearch={() => handleSearch()}
      />
      {alert ? (
        <AlertWrapper>
          <Alert
            message={strings.comum.warning}
            type="info"
            description={strings.users.search_input_warning}
            closable
            after
            onClose={() => handleCloseAlert()}
          />
        </AlertWrapper>
      ) : null}
    </SearchUserWrapper>
  );
}

export default UserSearch;
