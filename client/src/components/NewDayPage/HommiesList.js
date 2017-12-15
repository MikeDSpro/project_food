import React from 'react';
import UserRecordWithInput from './UserRecordWithInput';

const HommiesList = (props) => {

  return (
    <div>
      {props.hommies.map((hom) => <UserRecordWithInput
        defVal={hom.total}
        key = {hom.id}
        id={hom.id}
        name = {`${hom.firstName} ${hom.lastName}`}
        changeValue = {props.changeValue}
      />)}
    </div>

  )
}

export default HommiesList;