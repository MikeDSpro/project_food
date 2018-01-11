import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import NumericInput from 'react-numeric-input';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserRecord from './UserRecord___';



class UserRecordWithInput extends React.Component{

  state = {value: this.props.defValue || 0,
          };


  render(){

    const {defVal, changeValue, reset} = this.props;
    const {value} = this.state;


  return(
    <MuiThemeProvider>
    <div style={{display:'flex', marginBottom: '10px'}}>
      <div className='list_element'>
      <UserRecord
        firstName = {this.props.firstName}
        lastName={this.props.lastName}
      />
      </div>

      <NumericInput
        onChange={(target) => {changeValue(target, this.props.id ); this.setState({value: target})}}
        mobile
        min={0} max={100} value={value}
        size={1}
        step={1}
        style={{
          wrap: {
            width: '200px',
            background: '#E2E2E2',
            boxShadow: '0 0 1px 1px #fff inset, 1px 1px 5px -1px #C0C0C0',
            padding: '2px 2.26ex 2px 2px',
            borderRadius: '6px 3px 3px 6px',
            fontSize: 28,
            position: 'relative',
            cursor: 'pointer',
          },
          input: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'transparent',
            borderRadius: '4px 2px 2px 4px',
            border: 'none',
            display: 'block',
            fontWeight: 100,
            textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)'
          },
          'input:focus': {
            outline: 'none'
          },
          arrowUp: {
            borderBottomColor: 'rgba(66, 54, 0, 0.63)'
          },
          arrowDown: {
            borderTopColor: 'rgba(66, 54, 0, 0.63)'
          }}
        }
      />
      <RaisedButton style={{ marginLeft: '10px', boxShadow:'none'}} primary onClick={() => {this.setState({value: 0}); reset(value)  }}>Reset</RaisedButton>
    </div>
    </MuiThemeProvider>
  );
  }
};

export default UserRecordWithInput;