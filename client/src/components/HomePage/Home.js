import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {NavLink} from 'react-router-dom';

import './styles.css';

const HomePage = () => {
  return(
    <div className="home__wrapper">
      <NavLink className="nav__link" to='/auth/login'>LogIn</NavLink>
      <NavLink className="nav__link" to='/auth/signup'>SignUp</NavLink>
    </div>
  )
};

export default HomePage;