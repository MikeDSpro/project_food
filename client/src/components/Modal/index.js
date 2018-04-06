import React from 'react';
import SkyLight from 'react-skylight';
import RaisedButton from 'material-ui/RaisedButton';
import AddHommyForm from '../AdminActions/AddHommyForm';
import styles from './modalStyles';

class Modal extends React.Component {

  closeModalOnAdd = () => {
     this.simpleDialog.hide();
  };

  render() {
    return (
      <div>

          <RaisedButton onClick={() => this.simpleDialog.show()}>Create New Hommy</RaisedButton>
        <SkyLight
          closeButtonStyle={styles.closeButtonStyle}
          dialogStyles={styles.dialogStyles}
          hideOnOverlayClicked
          ref={ref => {this.simpleDialog = ref}}
          >
            <span>Add new Hommy</span>
            <AddHommyForm closeModalOnAdd={this.closeModalOnAdd}/>
        </SkyLight>
      </div>
    )
  }
}



export default Modal;