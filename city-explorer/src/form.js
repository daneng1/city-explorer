import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class FormInput extends React.Component{
  constructor(props){
    super(props);
      this.state={
        location:{},
        searchQuery: '',
        imgSrc: '',
        displayResults: false,
        hasError: false
      }
  }

  getLocationInfo = async(e) => {
    try{
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
    const location = await axios.get(url)
  
    const locationArray = location.data;
    this.setState({ 
      location: locationArray[0], 
      displayResults: true,
      imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=11&size=1200x900` 
    });
    }catch(err) {
      if(!alert(err)){window.location.reload()};
    }
  }

  render(){
    console.log('state', this.state)
    return(
      <>
        <Form onSubmit={this.getLocationInfo}>
          <Form.Group  controlId="formBasicEmail">
            <Form.Label>Enter a City to Explore</Form.Label>
            <Form.Control variant="info" className="form-control" size="lg" onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="Enter city" />
            <Form.Text  width={350}className="text-muted">
            </Form.Text>
          </Form.Group>
          <Button variant="outline-info" type="submit">
            EXPLORE!
          </Button>
        </Form>
        {this.state.displayResults &&
          <>
            <h2 className="city">{this.state.location.display_name}</h2>
            <h3 className="lat-lon">{this.state.location.lat}{this.state.location.lon}</h3>
            <img src={this.state.imgSrc} alt="Map view of city"/>
          </>
        }
      </>
    )
  }    
}

export default FormInput;
