import React, {Component} from 'react';

import HommyForm from './HommyForm';

const UserData = (props) => {

  return(
    <div>
      <HommyForm
        id = {props.id}
        closeEdit={props.closeEdit}
        closeDialogOnDelete={props.closeDialogOnDelete}/>
    </div>
  )
};

export default UserData;