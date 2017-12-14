import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserRecord from './UserRecord';


const UserRecordWithInput = () => {
  return(
    <MuiThemeProvider>
    <div style={{display:'flex'}}>
      <div style={{alignSelf:'flex-end'}}>
      <UserRecord />
      </div>
      <TextField
        hintText="Amount Field"
        floatingLabelText="Amount"
        type="number"
        defaultValue='30'
        min={0}
        max={99}
        style={{width:'50px'}}
      />
    </div>
    </MuiThemeProvider>
  );
}

export default UserRecordWithInput;