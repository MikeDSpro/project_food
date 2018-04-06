import React from 'react';
import {connect} from 'react-redux';
import {push} from "react-router-redux";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Reports = (props) => {
  const {push} = props;
  return(
    <MuiThemeProvider>
      <div>
        <div>Reports</div>
        <RaisedButton onClick={() => push('/actions')}>Go Back</RaisedButton>
      </div>
    </MuiThemeProvider>
  )
}

export default connect(null,{push})(Reports);