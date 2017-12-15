import {GET_TOKEN,
  GET_TOKEN_FAIL,
  GET_TOKEN_SUCCESS,
  SET_TOKEN, USER_LOGOUT,
  GET_ALL_HOMMIES,
  GET_ALL_HOMMIES_SUCCESS,
  GET_ALL_HOMMIES_FAIL,
  CHANGE_VALUE,
} from "../../constants";

export const getToken = (params) => {
  return {type: GET_TOKEN, payload: params}
};

export const getTokenSuccess = (params) => {
  return {type: GET_TOKEN_SUCCESS, payload: params}
};

export const getTokenFail = (error) => {
  return {type: GET_TOKEN_FAIL, payload: error}
};

export const setToken = (params) => {
  return {type: SET_TOKEN, payload: params}
};

export const userLogout = () => {
  return {type: USER_LOGOUT}
};

export const getAllHommies = () => {
  return {type: GET_ALL_HOMMIES}
};

export const getAllHommiesSuccess = (hommies) => {
  return {type: GET_ALL_HOMMIES_SUCCESS, payload:hommies}
};

export const getAllHommiesFail = (e) => {
  return {type: GET_ALL_HOMMIES_FAIL, payload:e}
};


export const changeValue = (value, index) => {
  return {type: CHANGE_VALUE, payload:{
      value,
      index
    }
}}