import React from 'react';
import { Field, reduxForm, } from 'redux-form';
import TextField from 'material-ui/TextField';
import { push } from 'react-router-redux';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles.css';
import validate from './validate';
// import { addHommy } from '../../actions';

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


const BaseForm = (props) => {

  const { handleSubmit, pristine, reset, submitting, error, closeModalOnAdd } = props;

  const handleAdd = (e) =>{
    e.preventDefault();
    handleSubmit();
    closeModalOnAdd();
  };

  return(
    <MuiThemeProvider>
      <div className = 'wrap'>
        <form onSubmit={ handleAdd }>
          <div className='input_field'>
            <Field name="firstName" component={renderTextField} label="First Name" />
          </div>
          <div className='input_field'>
            <Field name="lastName" component={renderTextField} label="Last Name" />
          </div>
          <div className='input_field'>
            <Field type="email" name="email" component={renderTextField} label="Email" />
          </div>
          <div className='submit_button'>
            {error && <strong>{error}</strong>}
            {/*<RaisedButton type="submit" primary disabled={pristine || submitting}>*/}
              {/*ADD*/}
            {/*</RaisedButton>*/}
          </div>
        </form>
      </div>
    </MuiThemeProvider>
  )
};

const fromDecoratorForm = reduxForm({
  form: 'BaseForm',

  validate,
})(BaseForm);

const mapDispatchToProps = {
  goTo: push,
  onSubmit: (values, dispatch) => {
    dispatch(addHommy(values))
  }
};

export default connect(null, mapDispatchToProps)(fromDecoratorForm);


