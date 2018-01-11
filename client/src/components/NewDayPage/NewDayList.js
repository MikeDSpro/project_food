import {connect} from 'react-redux';
import React from 'react';
import {push} from "react-router-redux";
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {changeValue, closeDay, saveValue, resetAmount, getAmount, getAllHommies} from '../../actions';
import HommiesList from './HommiesList';
import './styles.css';


class NewDayList extends React.Component {

   state = {
    hommies: this.props.hommies
  };

   componentDidMount = () => {
     this.props.getAllHommies();
     this.props.getAmount({
       date: this.getDate(),
       hommies: this.props.hommies
     });
   };

  getDate = () => {
    return moment().format("YYYY-MM-DD");
    // return new Date().toJSON().slice(0,10).replace(/-/g,'/');
  };

  handleClose = () => {
    this.props.saveValue();
    this.props.closeDay({
    dayTotal:this.props.total,
    date: this.getDate(),
    hommies: this.props.hommies});
   };

  render(){
  const {hommies, total, changeValue, push, resetAmount, amounts} = this.props;
  console.log(this.props);
  return(
    <MuiThemeProvider>
      <div className='wrap'>
        <h2>Today's Food Order</h2>
        <h4>{this.getDate()}</h4>
        <RaisedButton onClick={() => push('/actions')}>Go Back</RaisedButton>
        <HommiesList

          hommies ={hommies}
          changeValue = {changeValue}
          saveValue={saveValue}
          reset={resetAmount}
        />
        <div className='total'>Total: <span>{total}</span></div>
        <RaisedButton onClick={() => this.handleClose()} primary >Save Day </RaisedButton>
        <RaisedButton primary >Reset All </RaisedButton>
      </div>
    </MuiThemeProvider>
  );
}}

const mapDispatchToProps = {
  getAllHommies,
  changeValue,
  closeDay,
  saveValue,
  resetAmount,
  getAmount,
  push
};

const mapStateToProps = ({hommies, dayReducer, total, dayAmount}) => ({
    hommies: hommies.hommies,
    amounts: dayAmount,
    total: total.Gtotal,
    days: dayReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewDayList);