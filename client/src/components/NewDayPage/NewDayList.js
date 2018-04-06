import {connect} from 'react-redux';
import React from 'react';
import {push} from "react-router-redux";
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {closeDay, getAmount, getAllHommies} from '../../actions';
import HommiesList from './HommiesList';
import './styles.css';


class NewDayList extends React.Component {

  componentDidMount = () => {
    this.props.getAmount({
      date: this.getDate(),

    });
  };

  getDate = () => {
    return moment().format("YYYY-MM-DD");
  };

  handleClose = () => {
    this.props.saveValue();
    this.props.closeDay({
    dayTotal:this.props.total,
    date: this.getDate(),
    hommies: this.props.hommies});
  };

  resetValue = () => {
    console.log('===>', "RESET")
  };

  render(){
  const {push, resetAmount, balances} = this.props;

    const initialValues = balances.reduce((acc, currentVal) => {
      return {...acc, [currentVal.id]: currentVal.hommieBalances[0].amount}
    },{});

  return(
    <MuiThemeProvider>
      <div className='wrap'>
        <h2>Today's Food Order</h2>
        <h4>{this.getDate()}</h4>
        <RaisedButton
          onClick={() => push('/actions')}>Go Back</RaisedButton>
        <HommiesList
          hommiesWithBalances={balances}
          reset={this.resetValue}
        />
        <div className='total'>Total: <span>{0}</span></div>
      </div>
    </MuiThemeProvider>
  );
}}

const mapDispatchToProps = {
  getAllHommies,
  closeDay,
  getAmount,
  push
};

const mapStateToProps = ({hommies, dayReducer, total, dayAmount, hommieBalances}) => ({
    hommies: hommies.hommies,
    // amounts: dayAmount,
    // total: form.Balances.values.reduce((a, c) => a + c, 0),
    // days: dayReducer,
    balances: hommieBalances.balances,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewDayList);