import React from 'react';
import UserRecord from '../NewDayPage/UserRecord';

const UserRecordWithControls = () =>{
  return(
    <label >
      <UserRecord/>
       <button>Delete</button>
       <button>Edit</button>
  </label>
  )
}

export default UserRecordWithControls;