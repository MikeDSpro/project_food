import React from 'react';
import UserRecordWithInput from './UserRecordWithInput';

const HommiesList = (props) => {
const {hommies, changeValue, saveValue, values} = props;
  return (
    <div className='list_wrapper'>
      {hommies.map((hom) => <UserRecordWithInput
        defVal={hom.total}
        key = {hom.id}
        id={hom.id}
        firstName = {hom.firstName}
        lastName={hom.lastName}
        changeValue = {changeValue}
        values={values}
      />)}
    </div>

  )
};

export default HommiesList;