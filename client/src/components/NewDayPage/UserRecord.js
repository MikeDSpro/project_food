import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactModal from 'react-modal';
import UserData from './UserData';
import './styles.css';


ReactModal.setAppElement('#root');

class UserRecord extends React.Component {

  constructor () {
    super();
    this.state = {
      showModal: false
    };
  }

  closeDialogOnDelete = () => {
    this.props.deleteHommy();
    this.hideModal();
  };

  hideModal = () => {
    this.setState({showModal: false});
  };

  showModal = () => {
    return(
      <ReactModal
        isOpen
        contentLabel="onRequestClose Example"
        onRequestClose={this.handleCloseModal}
      >
        <UserData
          id={this.props.id}
          closeEdit={this.hideModal}
          closeDialogOnDelete={this.closeDialogOnDelete}/>
      </ReactModal>
    )
  };

  render(){
     return(

      <MuiThemeProvider>
        <div>
          <ListItem onClick={() => this.setState({ showModal:true})}
                    primaryText={`${this.props.firstName} ${this.props.lastName}`}
                    leftAvatar={<Avatar src="" />}
                    >
            {this.state.showModal && this.showModal()}

          </ListItem>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default UserRecord;