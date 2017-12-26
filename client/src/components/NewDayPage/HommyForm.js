import React from 'react';
import { Field, reduxForm, } from 'redux-form';
import TextField from 'material-ui/TextField';
import { push } from 'react-router-redux';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './styles.css';
import validate from '../LoginForm/validate';

import {editHommy} from '../../actions';

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


const HommyForm = (props) => {

  const { handleSubmit, pristine, reset, submitting, error, closeModalOnAdd, closeDialogOnDelete, closeEdit, load } = props;

  const handleAdd = (e) =>{
    e.preventDefault();
    handleSubmit();
    closeEdit();
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
            <RaisedButton type="submit" primary disabled={pristine || submitting}>
              SAVE
            </RaisedButton>
            <RaisedButton primary onClick={ closeEdit }>
              CANCEL
            </RaisedButton>
            <RaisedButton secondary onClick={ closeDialogOnDelete }>
              DELETE
            </RaisedButton>
          </div>

        </form>
      </div>
    </MuiThemeProvider>
  )
};

const fromDecoratorForm = reduxForm({
  form: 'AddHommyForm',
  onSubmit: (values, dispatch) => {
    dispatch(editHommy(values));
    console.log('VALUES', values)
  },
  enableReinitialize: true,
  validate,
})(HommyForm);


const mapDispatchToProps = {
  goTo: push,

};

export default connect((state, ownProps) => {
  const values = state.hommies.hommies.find(hom => hom.id === ownProps.id);

  return ({initialValues:values })
}, mapDispatchToProps)(fromDecoratorForm);

//  (state) => ({initialValues: state.hommyData}

//  export default connect((state, ownProps) => ({initialValues: state.hommies.hommies.find(hom => hom.id === ownProps.id)}), mapDispatchToProps)(fromDecoratorForm);