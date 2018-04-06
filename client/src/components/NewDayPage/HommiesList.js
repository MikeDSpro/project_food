import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import UserRecordWithInput from './UserRecordWithInput';
import validate from '../LoginForm/validate';

// const formEntry = ({
//   input, label, meta:{
//     touched, error}, ...custom, firstName, lastName, balance,
//                      key, changeValue, values, reset, id
// }) => <UserRecordWithInput
//       floatingLabelText={label}
//       errorText = {touched&&error}
//       {...input}
//       {...custom}
//       firstName={firstName}
//       lastName={lastName}
//       key={key}
//       changeValue={changeValue}
//       values={values}
//       reset={reset}
//       balance={balance}
//       id={id}
//       />;

  const HommiesList = (props) => {
    const {handleSubmit, changeValue, values, resetValue, hommiesWithBalances, id} = props;
    const saveDay = (e) =>{
      e.preventDefault();
      handleSubmit();
    };

      return (
        <form onSubmit={saveDay} >
          <div className='list_wrapper'>
            {hommiesWithBalances.map((hom) =>
              <div key={hom.id}>
              <Field
                id={hom.id}
                balance={hom.hommieBalances[0]}
                changeValue={changeValue}
                resetValue={resetValue}
                name={hom.id.toString()}
                component={UserRecordWithInput}
                firstName={hom.firstName}
                lastName={hom.lastName}
                values={values}
              />
              </div>
              )}
          </div>
          <RaisedButton primary type="submit"> Save Day </RaisedButton>
          <RaisedButton primary> Reset All </RaisedButton>
        </form>
      )
  };

export default reduxForm({
  form: 'Balances',
   onSubmit: () => console.log('Submit'),
  //   (values, dispatch) => {
  //   dispatch()
  // },
  validate,
})(HommiesList);