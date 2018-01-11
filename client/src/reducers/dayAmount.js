import {CHANGE_VALUE} from "../../constants";


const dayAmount = (amounts = [], action) =>{        // , Gtotal: 0

  switch (action.type) {
    case CHANGE_VALUE: return [...amounts, amounts.map(item => ({
      ...item, amount:item.id === action.payload.index ? item.amount = action.payload.value:item.amount
    }))];

    default: return amounts;
  }


// case CHANGE_VALUE: console.log(action.payload); return {
//   ...state, hommies: state.hommies.map(item => ({
//     ...item, total: item.id === action.payload.index ? item.total = action.payload.value : item.total
//   })),
//   Gtotal: state.hommies.reduce((prev, { total })=> prev + total, 0)
// };


  };

export default dayAmount;