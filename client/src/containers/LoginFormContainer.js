import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
// import LoginForm from '../components/LoginForm';
import '../styles/styles.css';


const mapStateToProps = (store) => {
  return {
    store,
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

// const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

// export default LoginFormContainer;