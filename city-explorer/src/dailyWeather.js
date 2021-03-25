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
              <Card.Title>{value.date}</Card.Title>
              <Card.Text>{value.desc}</Card.Text>
              <Card.Text>High: {value.high}</Card.Text>
              <Card.Text>Low: {value.low}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </> 
    )
  }
}

export default DailyWeather;