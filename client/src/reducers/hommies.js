import {GET_ALL_HOMMIES_SUCCESS, GET_ALL_HOMMIES_FAIL, CHANGE_VALUE} from '../../constants';

const hommies = (state = {
  hommies: [], Gtotal: 0,
}, action) =>{

  switch (action.type){

    case GET_ALL_HOMMIES_SUCCESS: return {...state, hommies:
      action.payload.map((item)=>({
        ...item,
        total: 30
      })),
      Gtotal: state.hommies.reduce((prev, { total })=> prev + total, 0)
    } ;

    case GET_ALL_HOMMIES_FAIL: return {...state, hommiesError:action.payload};

    case CHANGE_VALUE: return {
      ...state,
      hommies: state.hommies.map(item => ({
        ...item,
        total: item.id === action.payload.index ? item.total = action.payload.value : item.total
      })),
      Gtotal: state.hommies.reduce((prev, { total })=> prev + +total, 0)
    };

    default: return state;
  }
};

export default hommies;