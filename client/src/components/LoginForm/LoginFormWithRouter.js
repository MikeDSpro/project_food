import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginForm from './LoginForm';


const LoginFormWithRouter = () => {
  return(
    <Switch>
      <Route path='/' component={LoginForm}/>
    </Switch>
  )
};

export default LoginFormWithRouter;