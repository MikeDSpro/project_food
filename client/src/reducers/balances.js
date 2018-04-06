import {GET_AMOUNT_SUCCESS} from '../../constants';

const balances = (state = {balances:[]}, action) =>  {
  switch (action.type){

    case GET_AMOUNT_SUCCESS: console.log(action.payload); return {...state, balances: action.payload};

    default:
      return state;
  }
};

export default balances;

