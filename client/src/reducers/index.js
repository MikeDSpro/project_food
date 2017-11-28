import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxFormReducer} from 'redux-form';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  routing: routerReducer,
});

export default reducer;