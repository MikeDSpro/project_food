import { combineReducers } from 'redux';
import {GET_TOKEN_SUCCESS, GET_TOKEN_FAIL, USER_LOGOUT} from '../../constants';


const getToken = (state = { token: null }, action) => {
  switch (action.type) {
    case GET_TOKEN_SUCCESS: return {
      ...state, token:action.payload };

    default: return state;
  }
};

const loginReducer = combineReducers({
  getToken
});

const logoutReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    console.log('back to initial state');
    state = undefined;                // eslint-disable-line
  }
  return loginReducer(state, action);
};

export default logoutReducer;


