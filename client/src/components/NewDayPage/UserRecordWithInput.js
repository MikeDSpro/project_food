import React from 'react';
import UserRecord from './UserRecord';


const UserRecordWithInput = () => {
  return(
    <label >
      <UserRecord/>
      <input className = 'ammount' type = 'number' min='0' max='99'/>
    </label>
  );
}

export default UserRecordWithInput;