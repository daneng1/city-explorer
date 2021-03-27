import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class DailyWeather extends React.Component {
  render() {
    return(
      <>
        {this.props.data.map((value, key) => (
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{value.time}</Card.Title>
              <Card.Text>{value.forecast}</Card.Text>
              <Card.Text>High: {value.high} F</Card.Text>
              <Card.Text>Low: {value.low} F</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>
    )
  }
}

export default DailyWeather;