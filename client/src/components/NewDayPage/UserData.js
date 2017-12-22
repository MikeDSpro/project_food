import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import HommyForm from './HommyForm';

const UserData = (props) => {

  return(
    <div>
      <HommyForm
        id = {props.id}
       // loadHommyData={props.loadHommyData}
        closeEdit={props.closeEdit}
        closeDialogOnDelete={props.closeDialogOnDelete}/>
    </div>
  )
};

export default UserData;