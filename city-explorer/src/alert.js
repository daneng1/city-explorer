import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/button';

class Alert extends React.Component{
  
  render() {
    return(
      <>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Please try again</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </>
    );
  }
}

export default Alert;
