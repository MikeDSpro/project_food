import {call, put, takeEvery, takeLatest, select} from 'redux-saga/effects';
import {login} from '../api/requests';
import {getToken, getTokenSuccess, getTokenFail} from '../actions';
import { push } from 'react-router-redux';

function* receiveToken({ payload }) {
  try{
    const response = yield call(login, payload);

    yield put(getTokenSuccess(response.data.token));
    yield put(push('/actions'))
  }catch(e){
    yield put (getTokenFail(e));

  }
}

function* rootSaga() {
  yield takeLatest("GET_TOKEN", receiveToken);
}

export default rootSaga;