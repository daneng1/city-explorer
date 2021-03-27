import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import DailyWeather from './dailyWeather';


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
              <CardGroup>
                <DailyWeather key="dailyWeather"
                  data={this.props.dailyWeather}
                  />
              </CardGroup>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>  
    )
  }
}

export default Forecast;