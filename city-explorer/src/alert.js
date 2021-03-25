import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

class Alert extends React.Component{
  
  render() {

    return(
      <>
        <Modal size={'m'} show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Dialog animation="true" autoFocus="true" variant="danger">
            <Modal.Header  closeButton>
              <Modal.Title>{this.props.message}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Please try again</p>
            </Modal.Body>
          </Modal.Dialog>
        </Modal>
      </>
    );
  }
}

export default Alert;
