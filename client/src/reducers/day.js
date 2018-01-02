import {CLOSE_DAY_SUCCESS} from '../../constants';

// const dayReducer = (state = {days: []}, action) => {
//     switch(action.type){
//       case CLOSE_DAY_SUCCESS: return {...state, days:[...state.days, action.payload]};
//
//     default: return state;
//     }
// };
//
// export default dayReducer;

const dayReducer = (days = [], action) => {
  switch(action.type){
    case CLOSE_DAY_SUCCESS: return [...days, action.payload];

    default: return days;
  }
};

export default dayReducer;