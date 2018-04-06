import {GET_ALL_HOMMIES_SUCCESS, GET_ALL_HOMMIES_FAIL, CHANGE_VALUE, ADD_HOMMY_SUCCESS, DELETE_HOMMY_SUCCESS, LOAD_HOMMY_DATA, EDIT_HOMMY_SUCCESS, RESET_AMOUNT} from '../../constants';


const list = (state = {hommies: []}, action) =>{        // , Gtotal: 0

  switch (action.type){

    // case GET_ALL_HOMMIES_SUCCESS: return {...state, hommies:
    //   action.payload.map((item)=>({
    //     ...item,
    //     total: 0
    //   })),
    //   Gtotal: state.hommies.reduce((prev, { total })=> prev + total, 0)
    // } ;

   case GET_ALL_HOMMIES_SUCCESS: return {...state, hommies: action.payload};

    case GET_ALL_HOMMIES_FAIL: return {...state, hommiesError:action.payload};

    // case CHANGE_VALUE: console.log(action.payload); return {
    //   ...state, hommies: state.hommies.map(item => ({
    //     ...item, total: item.id === action.payload.index ? item.total = action.payload.value : item.total
    //   })),
    //   Gtotal: state.hommies.reduce((prev, { total })=> prev + total, 0)
    // };

    case ADD_HOMMY_SUCCESS: return {
      ...state, hommies: [ ...state.hommies, action.payload ]
    };

    case DELETE_HOMMY_SUCCESS: return {
      ...state, hommies: [...state.hommies.filter(hom => hom.id !== action.payload) ]
    };

    case EDIT_HOMMY_SUCCESS: return {
      ...state, hommies: [...state.hommies.map((hom) => hom.id === action.payload.id ? action.payload : hom)]
    };

    default: return state;
  }
};

export default list;

