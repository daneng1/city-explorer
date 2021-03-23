import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

class Alert extends React.Component{
  
  render() {

    return(
      <>
        <Modal.Dialog animation="true" autoFocus="true" variant="danger">
          <Modal.Header onHide={this.props.handleClose} closeButton>
            <Modal.Title>{this.props.message}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Please try again</p>
          </Modal.Body>
        </Modal.Dialog>
      </>
    );
  }
}

export default Alert;
