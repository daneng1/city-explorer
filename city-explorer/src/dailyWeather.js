import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class DailyWeather extends React.Component {
  render() {
    return(
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{this.props.data.time}</Card.Title>
            <Card.Text>{this.props.data.forecast}</Card.Text>
            <Card.Text>High: {this.props.data.high} F</Card.Text>
            <Card.Text>Low: {this.props.data.low} F</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default DailyWeather;