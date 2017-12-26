import {call, put, takeEvery, takeLatest, select} from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {login, getAllHommies, addHommy, deleteHommy, editHommyApi, getHommy} from '../api/requests';
import {getTokenSuccess, getTokenFail, getAllHommiesSuccess, getAllHommiesFail, addHommySuccess, deleteHommySuccess, editHommySuccess} from '../actions';
import {GET_TOKEN, GET_ALL_HOMMIES, ADD_HOMMY, DELETE_HOMMY, EDIT_HOMMY} from '../../constants';


function* receiveToken({ payload }) {
  try{
    const response = yield call(login, payload);
    yield put(getTokenSuccess(response.data));
    yield put(push('/actions'));
  }catch(e){
    yield put (getTokenFail(e));
  }
}

function* getAll() {
  try{
    const response = yield call(getAllHommies);
    if(response.data.length) {
    yield put(getAllHommiesSuccess(response.data));
    }
    // throw new Error('Unable to fetch hommies');
  }catch(e){
    yield put(getAllHommiesFail(e))
  }
}

function* addNewHommy ({payload}) {

  try{
    const response = yield call(addHommy, payload);
    yield put (addHommySuccess(response.data));

    }catch (e){
    // todo: add error handler
  }
}

function* hommyEdit({payload}) {
  console.log('SAVE values ==>', payload)
  try{
    const response = yield call(editHommyApi, payload);
    console.log(response.data)
    yield put (editHommySuccess(response.data));

  }catch(e){
    // todo: add error handler
  }
}

function* deleteOneHommy({payload}) {
  console.log(payload)
  try{
    yield call(deleteHommy, payload);
    yield put(deleteHommySuccess(payload))
  }catch(e){
    // todo: add error handler
  }
}



function* rootSaga() {
  yield* [
    takeLatest(GET_TOKEN, receiveToken),
    takeLatest(GET_ALL_HOMMIES, getAll),
    takeLatest(ADD_HOMMY, addNewHommy),
    takeLatest(DELETE_HOMMY, deleteOneHommy),
    takeLatest(EDIT_HOMMY, hommyEdit)
  ]
}

export default rootSaga;