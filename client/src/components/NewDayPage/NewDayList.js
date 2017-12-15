import {connect} from 'react-redux';
import React from 'react';
import {changeValue} from '../../actions';
import HommiesList from './HommiesList';


class NewDayList extends React.Component {

  render(){

  const {hommies, total, changeValue} = this.props;

  const utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

  return(
    <div className='wrap'>
      <h2>Today's Food Order</h2>
      <h4>{utc}</h4>
      <HommiesList
        hommies ={hommies}
        changeValue = {changeValue}
      />

      <div className='total'>Total: <span>{total}</span></div>
    </div>
  );
}}

const mapDispatchToProps = {
  changeValue
}

const mapStateToProps = ({hommies}) => ({
    hommies: hommies.hommies,
    total: hommies.Gtotal
});

export default connect(mapStateToProps, mapDispatchToProps)(NewDayList);