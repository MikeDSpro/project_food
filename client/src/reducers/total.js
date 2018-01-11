import {CHANGE_VALUE, RESET_AMOUNT,  } from '../../constants';


const total = (state = {Gtotal: 0}, action) => {
  switch (action.type){
    // case CHANGE_VALUE: console.log(action.payload.value); return {
    //   ...state, Gtotal: state.Gtotal + action.payload.value
    // }
    case RESET_AMOUNT: return {
      ...state, Gtotal: state.Gtotal - action.payload
    };
    default: return state;
  }
}

export default total;