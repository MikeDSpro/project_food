import { SubmissionError } from 'redux-form';

import {getToken} from "../../actions";

function submit(values) {
      if (!['Admin'].includes(values.firstName)) {
      throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login failed!',
      });
    } else if (values.password !== '123') {
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!',
      });
    } else {
        (values, dispatch) => dispatch(getToken(values));

    }

}

export default submit;