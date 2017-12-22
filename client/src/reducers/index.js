import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage';
import login from './user';
import list from './hommies';
import addHommyReducer from './addHommy';
import {ADD_HOMMY_SUCCESS, LOAD_HOMMY_DATA, CLEAR_FORM_FIELDS} from '../../constants';

const config = {
  key: 'root',
  storage,
};
const getHommies = {
  key: 'hommies',
  storage,
}

const reducer = combineReducers({           // Clear form
  form: formReducer.plugin({
    AddHommyForm: (state, action) => {
      switch(action.type) {
        case ADD_HOMMY_SUCCESS:
          return undefined;

        default:
          return state;
      }
    }
  }),
  routing: routerReducer,
  setToken: persistReducer(config, login),
  hommies: persistReducer(getHommies, list),
});


export default reducer;
