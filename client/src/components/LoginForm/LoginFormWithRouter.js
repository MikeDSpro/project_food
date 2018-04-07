import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Switch, Route} from 'react-router-dom';
import LoginForm from './LoginForm';
import './styles.css';

const LoginFormWithRouter = () => {
  return(
    <MuiThemeProvider>
      <div className='wrapper'>
      <Switch>
        <Route path='/' component={LoginForm}/>
      </Switch>
      <RaisedButton primary className='signup__btn'>SignUp</RaisedButton>
      </div>
    </MuiThemeProvider>
  )
};

export default LoginFormWithRouter;