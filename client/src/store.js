import { createStore, combineReducers, applyMiddleware } from "redux";
import {routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reducer from './reducers';

const loggerMW = store => next => action =>{
  console.log('-->', action);
  const result = next(action);
  console.log('store', store.getState());
  return result;
};

export const history = createHistory();
const middleware = routerMiddleware(history);


export const store = createStore(
  reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(loggerMW, middleware));


