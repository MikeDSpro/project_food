import React from 'react';
import UserRecordWithInput from './UserRecordWithInput';

const HommiesList = (props) => {
const {hommies, changeValue} = props;
  return (
    <div>
      {hommies.map((hom) => <UserRecordWithInput
        defVal={hom.total}
        key = {hom.id}
        id={hom.id}
        firstName = {hom.firstName}
        lastName={hom.lastName}
        changeValue = {changeValue}
      />)}
    </div>

  )
};

export default HommiesList;