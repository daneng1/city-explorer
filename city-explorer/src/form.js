import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from './alert';

import Map from './map';
import Forecast from './forecast';


class FormInput extends React.Component{
  constructor(props){
    super(props);
      this.state={
        location:{},
        searchQuery: '',
        imgSrc: '',
        displayResults: false,
        hasError: false,
        message: '',
        list:[]
      }
  }

  getForecast = async(e) => {
    try{
    e.preventDefault();
    const SERVER = process.env.REACT_APP_SERVER;
    const query = {lat: this.state.location.lat, lon: this.state.location.lon};
    const weather = await axios.get(`${SERVER}/weather/`, { params: query });
    const weatherArray = weather.data;
    this.setState({ list: weatherArray });
    }
    catch(err) {
      console.log('error', this.setState.message);
    }
  }

  getLocationInfo = async(e) => {
    try{
      e.preventDefault();
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
      const location = await axios.get(url);
      // const SERVER = process.env.REACT_APP_SERVER;
      // const query = {lat: this.location.lat, lon: this.location.lon};
      // const weather = await axios.get(`${SERVER}/weather/`, { params: query });
      // const weatherArray = weather.data;
      // this.setState({ list: weatherArray });
    
      const locationArray = location.data;
      this.setState({ 
        location: locationArray[0], 
        displayResults: true,
        imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=11&size=1200x900` 
    });
    }catch(err) {
      // this.setState({
      //   hasError: true, message: err.message
      // });
      console.log('error', this.state.message);
    } 
    this.getForecast();
  }

  render(){
    console.log('state:', this.state.location.lon);
    return(
      <>
        <Form onSubmit={this.getLocationInfo}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter a City to Explore</Form.Label>
            <Form.Control variant="info" className="form-control" size="lg" onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="Enter city" />
          </Form.Group>
          <Button className="form-button" variant="info" type="submit">
            EXPLORE!
          </Button>
        </Form>
        <Forecast 
          location={this.state.location}
          list={this.state.list}
        />
        {this.state.hasError &&
          <>
            <Alert
              handleClose={() => this.setState({hasError:false}) /*(window.location.reload())*/}
              show={this.state.hasError}
              message={this.state.message}
            />
          </>
        }
        {this.state.displayResults &&
          <>
            <h2 className="city">{this.state.location.display_name}</h2>
            <h3 className="lat-lon">{this.state.location.lat}{this.state.location.lon}</h3>
            <Map 
              imgSrc={this.state.imgSrc}
            />
          </>
        }
      </>
    )
  }    
}

export default FormInput;
