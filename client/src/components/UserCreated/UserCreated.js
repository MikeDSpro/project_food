import React from 'react';
import {NavLink} from 'react-router-dom';
import {List, ListItem, Divider} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles.css';

const UserCreated = () => {
  return (
    <MuiThemeProvider>
    <List className ='created__wrapper'>
    <h3>Your profile has been successfully created!</h3>
    <Divider/>
    <NavLink className ="link" to='/auth/login'>Back to login</NavLink>
    </List>
    </MuiThemeProvider>
  )
}

export default UserCreated;