import {GET_ALL_HOMMIES_SUCCESS, GET_ALL_HOMMIES_FAIL} from '../../constants';

const hommies = (state = [], action) =>{
  switch (action.type){
    case GET_ALL_HOMMIES_SUCCESS: return {...state, hommies:action.payload} ;
    case GET_ALL_HOMMIES_FAIL: return {...state, hommiesError:action.payload};
    default: return state;
  }
};

export default hommies;