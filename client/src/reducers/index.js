import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxFormReducer} from 'redux-form';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage';
import login from './user';
import hommies from './hommies';

const config = {
  key: 'root',
  storage,
};
const getHommies = {
  key: 'hommies',
  storage,
}

const reducer = combineReducers({
  form: reduxFormReducer,
  routing: routerReducer,
  setToken: persistReducer(config, login),
  hommies: persistReducer(getHommies, hommies),
});


export default reducer;
