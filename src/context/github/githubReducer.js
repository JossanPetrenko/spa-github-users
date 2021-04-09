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

const githubReducer = (state, action) => {
  switch (action.type) {
    //#region user
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    //#endregion

    //#region repositores
    case GET_REPOSITORIES: {
      return {
        ...state,
        repositories: action.payload,
        loading: false,
      };
    }
    case CLEAR_REPOSITORIES:
      return {
        ...state,
        repositories: [],
        loading: false,
      };
    //#endregion

    //#region starreds
    case GET_STARREDS: {
      return {
        ...state,
        starreds: action.payload,
        loading: false,
      };
    }
    case CLEAR_STARREDS:
      return {
        ...state,
        starreds: [],
        loading: false,
      };
    //#endregion

    //#region loading
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    ////#endregion

    default:
      return state;
  }
};

export default githubReducer;
