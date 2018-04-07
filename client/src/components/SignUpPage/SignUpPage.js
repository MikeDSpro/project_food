import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './styles.css';
import validate from './validate';
import { getToken } from '../../actions';


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
  />;

const SignUpForm = props => {
  const { handleSubmit, pristine, reset, submitting, error, token } = props;

  return (
    <MuiThemeProvider>
      <div className = 'wrap'>
        <form onSubmit={ handleSubmit }>
          <div className='input_field'>
            <Field name="firstName" component={renderTextField} label="First Name" autoComplete='family-name' />
          </div>
          <div className='input_field'>
            <Field name="lastName" component={renderTextField} label="Last Name" autoComplete='family-name' />
          </div>
          <div className='input_field'>
            <Field type="email" name="email" component={renderTextField} label="Email" autoComplete='email'/>
          </div>
          <div className='input_field'>
            <Field type="password" name="password" component={renderTextField} label="Password" autoComplete='current-password'/>
          </div>
          <div className='submit_button'>
            {error && <strong>{error}</strong>}
            <RaisedButton type="submit" primary disabled={pristine || submitting}>
              Submit
            </RaisedButton>
          </div>
        </form>
        <NavLink className="nav__link" to='/'>Back to home page</NavLink>
      </div>
    </MuiThemeProvider>
  )
};

const fromDecoratorForm = reduxForm({
  form: 'SignUpForm',
  // onSubmit: (values, dispatch) => dispatch(getToken(values)),
  validate,
  onSubmit: () => console.log('reg')
})(SignUpForm);


const mapDispatchToProps = {
  goTo: push,
};

export default connect(null, mapDispatchToProps)(fromDecoratorForm);