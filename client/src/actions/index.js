import {
  GET_TOKEN, GET_TOKEN_FAIL, GET_TOKEN_SUCCESS, SET_TOKEN, USER_LOGOUT, GET_ALL_HOMMIES, GET_ALL_HOMMIES_SUCCESS,
  GET_ALL_HOMMIES_FAIL,
  CHANGE_VALUE, LOAD_HOMMY_DATA,
  EDIT_HOMMY, DELETE_HOMMY, ADD_HOMMY, ADD_HOMMY_SUCCESS, DELETE_HOMMY_SUCCESS, EDIT_HOMMY_SUCCESS,

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
}};

export const addHommy = (hommy) => {
  return {type: ADD_HOMMY, payload: hommy}
};

export const addHommySuccess = (hommy) => {
  return {type: ADD_HOMMY_SUCCESS, payload: hommy}
};

export const deleteHommy = (id) => {
  return {type: DELETE_HOMMY, payload: id}
};

export const deleteHommySuccess = (id) => {
  return {type: DELETE_HOMMY_SUCCESS, payload: id}
};

export const editHommy = ({id, payload}) => {
  return {type: EDIT_HOMMY, payload: {id, payload}}
};

export const editHommySuccess = ({id, payload}) => {
  return {type: EDIT_HOMMY_SUCCESS, payload: {id, payload}}
};

export const loadHommyData = (id) => {
  return {type: LOAD_HOMMY_DATA, payload: id}
};
