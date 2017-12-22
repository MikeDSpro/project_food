import React from 'react';
import {connect} from 'react-redux';
import {push} from "react-router-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import HommiesList from './HommiesList';
import AddHommyForm from './AddHommyForm';
import {deleteHommy, loadHommyData} from "../../actions";
import Modal from '../Modal';
import './styles.css';


const AdminActions = (props) =>{
const {push, deleteHommy, hommies} = props;
  return(
    <MuiThemeProvider>
      <div className='wrap'>
        <Modal/>
          <div>
          <RaisedButton onClick = {() => {push('/actions')}}>Go Back</RaisedButton>
        </div>
        <HommiesList hommies={hommies}
        deleteHommy={deleteHommy}
        loadHommyData={loadHommyData}/>
      </div>
    </MuiThemeProvider>
  )
};


const mapStateToProps = ({hommies}) => {
  return hommies
};

export default connect(mapStateToProps, {push, deleteHommy, loadHommyData})(AdminActions);