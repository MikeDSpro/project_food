import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import './styles.css';

const UserRecord = (props) => {
  return(

    <MuiThemeProvider>
        <ListItem
          primaryText="Brendan Lim"
          leftAvatar={<Avatar src="" />}
        />
    </MuiThemeProvider>
    
  )
}

export default UserRecord;