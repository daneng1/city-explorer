import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class Forecast extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
  }

  componentDidMount = async() => {
    const SERVER = 'https://city-explorer-dan.herokuapp.com/';
    const weather = await axios.get(`${SERVER}weather/`);
    const weatherArray = weather.data;
    console.log(weatherArray);
    console.log("newArray=", weather.data);
    this.setState({ list: weatherArray });
  }
  
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
              <Card.Body>{this.state.list.map((value, key) => (
                <ListGroup key={key}>
                  <ListGroup.Item variant="info">{value.date}  {value.desc}</ListGroup.Item>
                </ListGroup>
                
                // <div key={key}>
                //   <h4>{value.date}  {value.desc}</h4>
                // </div>
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