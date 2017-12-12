import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { push } from 'react-router-redux';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './styles.css';
import validate from './validate';
import { getToken } from '../../actions';
import ErrorField from '../ErrorField/ErrorField';


const renderTextField = ({
                           input,
                           label,
                           meta: { touched, error },
                           ...custom
                         }) =>
  (<TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />);


class LoginForm extends React.Component {

  render (){
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return(
    <MuiThemeProvider>
      <div className = 'wrap'>
        <form onSubmit={ handleSubmit }>
          <div className='input_field'>
            <Field name="firstName" component={renderTextField} label="First Name" />
          </div>
          <div className='input_field'>
            <Field name="lastName" component={renderTextField} label="Last Name" />
          </div>
          <div className='input_field'>
            <Field type="password" name="password" component={renderTextField} label="Password" />
          </div>
          <div className='submit_button'>
            <RaisedButton type="submit" primary disabled={pristine || submitting}>
              Submit
            </RaisedButton>
          </div>
        </form>

      </div>
    </MuiThemeProvider>
    )
  }
};

const fromDecoratorForm = reduxForm({
  form: 'LoginForm',
  onSubmit: (values, dispatch) => dispatch(getToken(values)), //  Check action
  validate,
})(LoginForm);


const mapDispatchToProps = {          //  Todo: validate

  goTo: push,

};

export default connect(null, mapDispatchToProps)(fromDecoratorForm);