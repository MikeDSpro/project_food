import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserRecord from './UserRecord___';


class UserRecordWithInput extends React.Component{

  render(){
    const {values} = this.props;


  return(
    <MuiThemeProvider>
    <div style={{display:'flex'}}>
      <div className='list_element' >
      <UserRecord
        firstName = {this.props.firstName}
        lastName={this.props.lastName}
      />
      </div>
      <TextField

        ref={(amount)=>{this.textInput = amount}}

        hintText="Amount Field"
        floatingLabelText="Amount"
        type="number"
        defaultValue={this.props.defVal}
        onChange={({target}) => this.props.changeValue(target.value, this.props.id )}
        min={0}
        max={99}
        style={{width:'50px'}}
      />
    </div>
    </MuiThemeProvider>
  );
  }
};

export default UserRecordWithInput;