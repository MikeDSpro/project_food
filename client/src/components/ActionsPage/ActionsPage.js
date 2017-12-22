import React, {Component} from 'react';
import { push } from 'react-router-redux';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux';
import './styles.css';
import {userLogout, getAllHommies} from '../../actions';


class ActionsPage extends Component{

  componentDidMount(){
    this.props.getAllHommies();
  }

  logout = () => {
    this.props.userLogout();
    this.props.push('/');           //  Todo: Move to saga
  };

 renderNewDay = () => {
    this.props.push('actions/newday');
  };

  renderAdminActions = () => {
    this.props.push('actions/admin');
  };


render(){
  const {push} = this.props;
  return(
    <MuiThemeProvider>
      <div className = 'wrap'>
        <div>
          <RaisedButton onClick = {() => {this.renderNewDay()}} primary>New Day</RaisedButton>
        </div>
        <div>
          <RaisedButton onClick = {() => {push('/actions/reports')}} primary>Reports</RaisedButton>
        </div>
        <div>
          <RaisedButton onClick = {() => {this.renderAdminActions()}} primary>Admin Actions</RaisedButton>
        </div>
        <div>
          <RaisedButton onClick = {() => {this.logout()}} primary>Logout</RaisedButton>
        </div>
        <div>
          <RaisedButton onClick = {() => {push('/')}}>Go Back</RaisedButton>
        </div>
      </div>
    </MuiThemeProvider>
  )
}
};



const mapStateToProps = ({hommies}) => {
  return {hommies}
};

export default connect(mapStateToProps, {push, userLogout, getAllHommies})(ActionsPage);

