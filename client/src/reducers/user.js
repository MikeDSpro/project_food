 const setToken = (state = { token: null }, action) => {
  switch (action.type) {
    case 'GET_TOKEN_SUCCESS': return {...state, token:action.payload };
    // case 'LOCATION_CHANGE': return {state.routing};
    default: return state;
  }

}

 export default setToken;