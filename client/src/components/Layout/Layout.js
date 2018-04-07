import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginFormWithRouter from '../LoginForm/LoginFormWithRouter';
import ActionsPage from '../ActionsPage/ActionsPage';


const Layout = ({token}) => {
  return(
    !token ? (<LoginFormWithRouter/>) : (<ActionsPage/>)
  )
};

export default withRouter(connect(state => ({
  token:state.setToken.token}))(Layout));