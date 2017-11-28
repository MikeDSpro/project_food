import React from 'react';
import { push } from 'react-router-redux';
// import {Button, Message} from 'semantic-ui-react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux';
import './styles.css';

const ActionsPage = ({push}) => {
  return(
    <MuiThemeProvider>
    <div className = 'wrap'>
      <div>
        <RaisedButton onClick = {() => {push('/actions/newday')}} primary>New Day</RaisedButton>
      </div>
      <div>
        <RaisedButton onClick = {() => {push('/actions/reports')}} primary>Reports</RaisedButton>
      </div>
      <div>
        <RaisedButton onClick = {() => {push('/actions/admin')}} primary>Admin Actions</RaisedButton>
      </div>
    </div>
    </MuiThemeProvider>
  )
}

export default connect(null, {push})(ActionsPage);