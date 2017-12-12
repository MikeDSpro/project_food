import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ActionsPage from '../ActionsPage/ActionsPage';


const Layout = ({token}) => {

  return(
    !token ? (<LoginForm/>) : (<ActionsPage/>)
  )

};

export default withRouter(connect(state => ({
  token:state.setToken.token}))(Layout));