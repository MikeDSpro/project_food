import React from 'react';
import {connect} from 'react-redux';
import {push} from "react-router-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import HommiesList from './HommiesList';
import {deleteHommy, getAllHommies} from "../../actions";
import Modal from '../Modal';
import './styles.css';


class AdminActions extends React.Component{

  componentDidMount = () => {
    this.props.getAllHommies();
  };

render(){
  const {push, deleteHommy, hommies} = this.props;
  return(
    <MuiThemeProvider>
      <div className='wrap'>
        <h1>Admin's Actions</h1>
        <Modal/>
        <RaisedButton onClick = {() => {push('/actions')}}>Go Back</RaisedButton>
        <HommiesList hommies={hommies}
                     deleteHommy={deleteHommy}
        />
      </div>
    </MuiThemeProvider>
  )
}
}

const mapStateToProps = ({hommies}) => {
  return hommies
};

export default connect(mapStateToProps, {push, deleteHommy, getAllHommies})(AdminActions);