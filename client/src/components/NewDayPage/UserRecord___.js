import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SkyLight from 'react-skylight';
import RaisedButton from 'material-ui/RaisedButton';
import UserData from './UserData';
import './styles.css';
import styles from "../Modal/modalStyles";

class UserRecord extends React.Component {

  closeDialogOnDelete = () => {
    this.props.deleteHommy();
    this.simpleDialog.hide();
  }

  render(){
    return(

    <MuiThemeProvider>
      <div>
        <ListItem onClick={() => this.simpleDialog.show()}
          primaryText={`${this.props.firstName} ${this.props.lastName}`}
          leftAvatar={<Avatar src="" />}

        />
         <SkyLight
          closeButtonStyle={styles.closeButtonStyle}
          dialogStyles={styles.dialogStyles}
          hideOnOverlayClicked
          ref={ref => {this.simpleDialog = ref}}
          title='Hommie about'
          >
           <UserData
             id={this.props.id}
             closeEdit={() => this.simpleDialog.hide()}
             closeDialogOnDelete={this.closeDialogOnDelete}/>

           </SkyLight>
      </div>
    </MuiThemeProvider>
  )
  }
}

export default UserRecord;