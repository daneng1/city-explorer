import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import DailyWeather from './dailyWeather';
import './App.css';

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
              {/* <Card.Body> */}
              <DailyWeather className="dailyWeather"
                data={this.props.list}
                />
              {/* </Card.Body> */}
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>  
    )
  }
}

export default Forecast;