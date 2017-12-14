import React from 'react';
import {connect} from 'react-redux';
import UserRecordWithInput from './UserRecordWithInput';


class NewDayList extends React.Component{
  constructor(props){
    super(props);
  }

render(){
  const {hommies} = this.props;
  console.log(hommies);
  const utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  return(
    <div className='wrap'>
      <h2>Today's Food Order</h2>
      <h4>{utc}</h4>
    <UserRecordWithInput />
    <UserRecordWithInput />
    <div className='total'>Total: <span>555</span></div>
    </div>
  );
}

}

const mapStateToProps =(state) => {
  return {
    hommies: state.hommies
  };
};

export default connect(mapStateToProps)(NewDayList);