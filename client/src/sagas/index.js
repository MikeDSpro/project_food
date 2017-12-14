import {call, put, takeEvery, takeLatest, select} from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {login, getAllUsers} from '../api/requests';
import {getTokenSuccess, getTokenFail, getAllHommiesSuccess, getAllHommiesFail} from '../actions';
import {GET_TOKEN, GET_ALL_HOMMIES} from '../../constants';

function* receiveToken({ payload }) {
  try{
    const response = yield call(login, payload);
    console.log(response.data);
    yield put(getTokenSuccess(response.data));
    yield put(push('/actions'));
  }catch(e){
    yield put (getTokenFail(e));
  }
}

function* getAllHommies() {
  try{
    const response = yield call(getAllUsers);
    if(response.data.length > 0) {
    yield put(getAllHommiesSuccess(response.data));
    yield put(push('/actions/newday'));
    }
    // throw new Error('Unable to fetch hommies');

  }catch(e){
    yield put(getAllHommiesFail(e))
  }
}


function* rootSaga() {
  yield* [
    takeLatest(GET_TOKEN, receiveToken),
    takeLatest(GET_ALL_HOMMIES, getAllHommies)
  ]
}

export default rootSaga;