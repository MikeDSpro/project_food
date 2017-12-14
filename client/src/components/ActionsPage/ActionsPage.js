import React from 'react';
import { push } from 'react-router-redux';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux';
import './styles.css';
import {userLogout, getAllHommies} from '../../actions';

const ActionsPage = ({push, userLogout, getAllHommies}) => {

  const logout = () => {
    userLogout();
    push('/');            //  Todo: Move to saga

  };
  const getAll = () => {
    getAllHommies();
  };
  return(

    <MuiThemeProvider>
    <div className = 'wrap'>
      <div>
        <RaisedButton onClick = {() => {getAll()}} primary>New Day</RaisedButton>
      </div>
      <div>
        <RaisedButton onClick = {() => {push('/actions/reports')}} primary>Reports</RaisedButton>
      </div>
      <div>
        <RaisedButton onClick = {() => {push('/actions/admin')}} primary>Admin Actions</RaisedButton>
      </div>
      <div>
        <RaisedButton onClick = {() => {logout()}} primary>Logout</RaisedButton>
      </div>
    </div>
    </MuiThemeProvider>
  )
};


const mapStateToProps = (state) => {
  return {hommies: state.hommies}
};

export default connect(mapStateToProps, {push, userLogout, getAllHommies})(ActionsPage);