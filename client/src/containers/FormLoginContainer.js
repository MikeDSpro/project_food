import React from 'react';
import {connect} from 'react-redux';
import {bindActionsCreators} from 'redux';

// import FormLogin from '../components/FormLogin';

class FormLoginContainer extends React.Component{

  handleSubmit = ({username, password}) => {
    console.log(username, password);
  }

  render(){
    return(
      <div>
        {/* <FormLogin onSubmit={this.handleSubmit}/> */}
      </div>
      )
  }
}

export default FormLoginContainer;