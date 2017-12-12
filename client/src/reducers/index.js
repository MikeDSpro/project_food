import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxFormReducer} from 'redux-form';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage';
import setToken from './user';

const config = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  form: reduxFormReducer,
  routing: routerReducer,
  setToken: persistReducer(config, setToken),
});


export default reducer;
