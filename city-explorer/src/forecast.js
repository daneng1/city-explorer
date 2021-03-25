import React from 'react';
// import axios from 'axios';
// import superagent from 'superagent';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class Forecast extends React.Component{

  render() {
    return(
      <>
        <Accordion defaultActiveKey="1">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="info" eventKey="0">
                View Weather Forecast
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{this.props.list.map((value, key) => (
                <ListGroup key={key}>
                  <ListGroup.Item variant="info">{value.date}  {value.desc}</ListGroup.Item>
                </ListGroup>
                ))}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>  
    )
  }
}

export default Forecast;