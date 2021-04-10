import React, {useState, useContext} from 'react';
import {Input, Alert, Button} from 'antd';
import {ClearOutlined} from '@ant-design/icons';

import GithubContext from 'context/github/githubContext';
import {SearchUserWrapper, AlertWrapper, ClearWrapper} from './styles';

import strings from 'infra/resources/strings';

const {Search} = Input;

function UserSearch() {
  const githubContext = useContext(GithubContext);
  const {loading, users} = githubContext;

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

  function handleClear() {
    githubContext.clearUsers();
    setUser('');
  }

  function handleOnChange(value) {
    setUser(value);
    if (value?.length >= 1) {
      setAlert(false);
    }
  }

  return (
    <>
      <SearchUserWrapper>
        <Search
          placeholder={strings.users.search_input_placeholder}
          enterButton={strings.comum.search}
          size="large"
          loading={loading}
          onChange={(e) => handleOnChange(e.target.value)}
          value={user}
          onPressEnter={() => handleSearch()}
          onSearch={() => handleSearch()}
        />
        <ClearWrapper>
          <Button
            disabled={users?.length < 1}
            icon={<ClearOutlined />}
            size="large"
            onClick={() => handleClear()}>
            {strings.comum.clear}
          </Button>
        </ClearWrapper>
      </SearchUserWrapper>
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
    </>
  );
}

export default UserSearch;
