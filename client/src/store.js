import { createStore, applyMiddleware } from "redux";
import {routerMiddleware, push } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';


import createHistory from 'history/createBrowserHistory';
import rootSaga from './sagas';
import reducer from './reducers';


const sagaMiddleware = createSagaMiddleware();

export const history = createHistory();

const middleware = routerMiddleware(history);


export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(middleware, sagaMiddleware));

export const persistor = persistStore(store);


sagaMiddleware.run(rootSaga);

