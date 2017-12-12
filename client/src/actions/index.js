import {GET_TOKEN, GET_TOKEN_FAIL, GET_TOKEN_SUCCESS, SET_TOKEN} from "../../constants";

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