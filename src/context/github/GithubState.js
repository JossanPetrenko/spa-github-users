import React, {useReducer} from 'react';
import axios from 'axios';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  CLEAR_REPOSITORIES,
  CLEAR_STARREDS,
  CLEAR_USERS,
  GET_REPOSITORIES,
  GET_STARREDS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from '../types';

import URL from 'infra/resources/urls';

const GithubState = (props) => {
  const initialState = {
    loading: false,
    repositories: [],
    starreds: [],
    user: {},
    users: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //#region user
  const searchUsers = async (value) => {
    setLoading();

    const response = await axios.get(URL.USER.USERS(value));

    dispatch({
      type: SEARCH_USERS,
      payload: response?.data?.items,
    });
  };

  const getUser = async (userName) => {
    setLoading();

    const response = await axios.get(URL.USER.USER(userName));

    dispatch({
      type: GET_USER,
      payload: response?.data,
    });
  };

  const clearUsers = () => dispatch({type: CLEAR_USERS});
  //#endregion

  //#region repositories
  const getUserRepositories = async (userName) => {
    setLoading();

    const response = await axios.get(URL.USER.REPOS(userName));

    dispatch({
      type: GET_REPOSITORIES,
      payload: response?.data,
    });
  };

  const clearRepositories = () => dispatch({type: CLEAR_REPOSITORIES});
  //#endregion

  //#region starreds
  const getUserStarreds = async (userName) => {
    setLoading();

    const response = await axios.get(URL.USER.STARRED(userName));

    dispatch({
      type: GET_STARREDS,
      payload: response?.data,
    });
  };

  const clearStarreds = () => dispatch({type: CLEAR_STARREDS});
  //#endregion

  //#region loading
  const setLoading = () => dispatch({type: SET_LOADING});
  //#endregion

  return (
    <GithubContext.Provider
      value={{
        loading: state.loading,
        repositories: state.repositories,
        starreds: state.starreds,
        user: state.user,
        users: state.users,

        clearRepositories,
        clearStarreds,
        clearUsers,
        getUser,
        getUserRepositories,
        getUserStarreds,
        searchUsers,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
