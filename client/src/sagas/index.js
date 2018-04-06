import { call, put, takeEvery, takeLatest, select, fork} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { push } from 'react-router-redux';
import { login, getAllHommies, addHommy, deleteHommy, editHommyApi, getHommy, closeNewDay, getAmount} from '../api/requests';
import {
  getTokenSuccess, getTokenFail, getAllHommiesSuccess, getAllHommiesFail, addHommySuccess, deleteHommySuccess,
  editHommySuccess, closeDaySuccess, getDayAmountSuccess, getAmountSuccess,
} from '../actions';
import {
  GET_TOKEN, GET_ALL_HOMMIES, ADD_HOMMY, DELETE_HOMMY,
  EDIT_HOMMY, CLOSE_DAY, GET_AMOUNT,
} from '../../constants';



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
    yield delay(500);
    const {data} = yield call(getAllHommies);

       if(data.length) {
       yield put(getAllHommiesSuccess(data));
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
  try{
    const response = yield call(editHommyApi, payload);
    yield put (editHommySuccess(response.data));

  }catch(e){
    // todo: add error handler
  }
}

function* deleteOneHommy({payload}) {

  try{
    yield call(deleteHommy, payload);
    yield put(deleteHommySuccess(payload))

  }catch(e){
    // todo: add error handler
  }
}

function* dayClose({payload}) {
  try{
   const response = yield call(closeNewDay, payload);
  }catch (e){
    // todo:
  }
}

function* getHommiesAmount({payload}) {
  try{
    const {data} = yield call(getAmount, payload);
    yield put(getAmountSuccess(data));

  }catch(e){
    console.log('ERROR:',e)
  }
}

// function* getAmount () {
//   try{
//     const response = yield call(getAmounts);
//     const total = response.data.amounts.reduce((acc, { amount }) => {
//       return acc + amount
//     },0);
//     yield put (getDayAmountSuccess(response));
//   } catch(e){
//     // todo:
//   }
// }


function* rootSaga() {
  yield* [
    takeLatest(GET_TOKEN, receiveToken),
    takeLatest(GET_ALL_HOMMIES, getAll),
    takeLatest(ADD_HOMMY, addNewHommy),
    takeLatest(DELETE_HOMMY, deleteOneHommy),
    takeLatest(EDIT_HOMMY, hommyEdit),
    takeLatest(CLOSE_DAY, dayClose),
    takeLatest(GET_AMOUNT, getHommiesAmount),
     ]
}

export default rootSaga;