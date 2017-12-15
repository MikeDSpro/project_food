import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserRecord from './UserRecord';


const UserRecordWithInput = (props) => {
  {console.log(props)}
  return(
    <MuiThemeProvider>
    <div style={{display:'flex'}}>
      <div style={{alignSelf:'flex-end'}}>
      <UserRecord
        name = {props.name}
      />
      </div>
      <TextField
        ref={props.inputRef}
        hintText="Amount Field"
        floatingLabelText="Amount"
        type="number"
        defaultValue={props.defVal}
        onChange={ ({target}) => props.changeValue(target.value, props.id )}
        min={0}
        max={99}
        style={{width:'50px'}}
      />
    </div>
    </MuiThemeProvider>
  );
}

export default UserRecordWithInput;