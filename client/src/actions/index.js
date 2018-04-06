import {
  GET_TOKEN, GET_TOKEN_FAIL, GET_TOKEN_SUCCESS, SET_TOKEN, USER_LOGOUT, GET_ALL_HOMMIES, GET_ALL_HOMMIES_SUCCESS,
  GET_ALL_HOMMIES_FAIL,
  CHANGE_VALUE,
  EDIT_HOMMY, DELETE_HOMMY,
  ADD_HOMMY, ADD_HOMMY_SUCCESS,
  DELETE_HOMMY_SUCCESS, EDIT_HOMMY_SUCCESS,
  CLOSE_DAY_SUCCESS,
  CLOSE_DAY, SAVE_VALUE, SAVE_VALUE_SUCCESS,
  GET_DAY_AMOUNT, GET_DAY_AMOUNT_SUCCESS, RESET_AMOUNT,
  SET_AMOUNTS, GET_AMOUNT, GET_AMOUNT_SUCCESS,

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

export const editHommy = (params) => {
  return {type: EDIT_HOMMY, payload: params}
};

export const editHommySuccess = (params) => {
  return {type: EDIT_HOMMY_SUCCESS, payload: params}
};
//  /////////////////////////////////////
export const closeDay = (params) => {
  return {type: CLOSE_DAY, payload: params}
};

export const closeDaySuccess = (params) => {
  return {type: CLOSE_DAY_SUCCESS, payload: params}
};

export const saveValue = (params) => {
  return {type: SAVE_VALUE, payload: params}
};

export const saveValueSuccess = (params) => {
  return {type: SAVE_VALUE_SUCCESS, payload: params}
};

export const getDayAmount = (params) => {
  return {type: GET_DAY_AMOUNT, payload: params}
};

export const getDayAmountSuccess = (params) => {
  return {type: GET_DAY_AMOUNT_SUCCESS, payload: params}
};

export const resetAmount = (params) => {
  return {type: RESET_AMOUNT, payload: params}
};

export const setAmounts = (params) => {
  return {type: SET_AMOUNTS, payload: params}
};

export const getAmount = (params) => {
  return {type: GET_AMOUNT, payload: params}
};

export const getAmountSuccess = (params) => {
  return {type: GET_AMOUNT_SUCCESS, payload: params}
};