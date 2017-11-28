import React from 'react';
import UserRecordWithInput from './UserRecordWithInput';

class NewDayList extends React.Component{
  constructor(props){
    super(props);
  }

render(){
  return(
    <div className='wrap'>
      <h2>Today's Food Order</h2>
      <h4>Date</h4>
    <UserRecordWithInput />
    <UserRecordWithInput />
    <div className='total'>Total: <span>555</span></div>
    </div>
  );
}

}

export default NewDayList;