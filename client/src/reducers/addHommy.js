import {reducer as formReducer} from 'redux-form';
import {ADD_HOMMY_SUCCESS} from '../../constants';

const addHommyReducer = {

  form: formReducer.plugin({
    addHommyForm: (state, action) => { // <------ 'addHommyForm' is name of form given to reduxForm()
      switch(action.type) {
        case ADD_HOMMY_SUCCESS:
          return undefined;       // <--- blow away form data
        default:
          return state;
      }    }
  })
};


export default addHommyReducer;