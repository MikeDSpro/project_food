import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage';
import login from './user';
import list from './hommies';
import total from './total';
import balances from './balances';
import dayAmount from './dayAmount';
import {ADD_HOMMY_SUCCESS} from '../../constants';
import dayReducer from './day';

const config = {
  key: 'root',
  storage,
};
const getHommies = {
  key: 'hommies',
  storage,
};

const reducer = combineReducers({
  form: formReducer.plugin({                    // Clear form
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
  hommies: list, // persistReducer(getHommies, list),
  hommieBalances: balances,
  dayReducer, total, dayAmount,
});


export default reducer;
