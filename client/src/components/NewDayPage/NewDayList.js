import {connect} from 'react-redux';
import React from 'react';
import {push} from "react-router-redux";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {changeValue} from '../../actions';
import HommiesList from './HommiesList';


class NewDayList extends React.Component {

  handleClick = () => {};

  render(){

  const {hommies, total, changeValue, push} = this.props;
  const utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

  return(
    <MuiThemeProvider>
      <div className='wrap'>
        <h2>Today's Food Order</h2>
        <h4>{utc}</h4>
        <RaisedButton onClick={() => push('/actions')}>Go Back</RaisedButton>
        <HommiesList
          hommies ={hommies}
          changeValue = {changeValue}
        />
        <div className='total'>Total: <span>{total}</span></div>
        <RaisedButton onClick={this.handleClick} primary >Close day </RaisedButton>
      </div>
    </MuiThemeProvider>
  );
}}

const mapDispatchToProps = {
  changeValue,
  push
};

const mapStateToProps = ({hommies}) => ({
    hommies: hommies.hommies,
    total: hommies.Gtotal
});

export default connect(mapStateToProps, mapDispatchToProps)(NewDayList);