import React, {useReducer} from 'react';
import axios from 'axios';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

import URL from 'infra/resources/urls';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (value) => {
    setLoading();

    const res = await axios.get(URL.USER.USERS(value));

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  const getUser = async (userName) => {
    setLoading();

    const res = await axios.get(URL.USER.USER(userName));

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  const getUserRepos = async (userName) => {
    setLoading();

    const res = await axios.get(URL.USER.REPOS(userName));

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  const clearUsers = () => dispatch({type: CLEAR_USERS});

  const setLoading = () => dispatch({type: SET_LOADING});

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
