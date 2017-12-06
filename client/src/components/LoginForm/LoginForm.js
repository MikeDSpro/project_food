import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { push } from 'react-router-redux';
import {connect} from 'react-redux';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './styles.css';
import validate from './validate';


const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) =>
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
  
const handleLogin = () => {

}

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <MuiThemeProvider>
    <div className = 'wrap'>
    <form onSubmit={handleSubmit(()=>{push('/actions')})}>
      <div className='input_field'>
        <Field name="firstName" component={renderTextField} label="First Name" />
      </div>
      <div className='input_field'>
        <Field name="lastName" component={renderTextField} label="Last Name" />
      </div>
      <div className='input_field'>
        <Field name="email" component={renderTextField} label="Email" />
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

const fromDecoratorForm = reduxForm({ form: 'LoginForm', validate })(LoginForm);

export default connect(null, {push})(fromDecoratorForm);