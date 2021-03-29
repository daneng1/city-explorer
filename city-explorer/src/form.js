import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from './alert';
import Map from './map';
import Forecast from './forecast';
import Movies from './movies';


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
        currentWeatherArray:[],
        movieList: []
      }
  }

  
  getLocationInfo = async(e) => {
    try{
      e.preventDefault();
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
      const location = await axios.get(url);
      const locationArray = location.data;
      this.setState({ 
        location: locationArray[0], 
        displayResults: true,
        imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=11&size=800x800`
      });
      this.getForecast(locationArray[0]);
      this.getMovies();
    }catch(err) {
      this.setState({
        hasError: true, message: err.message
      });
      console.log('error', this.state.message);
    } 

  }

  getForecast = async(location) => {
    try{
      const SERVER = process.env.REACT_APP_SERVER;
      const query = {lat: location.lat, lon: location.lon};
      const weather = await axios.get(`${SERVER}/weather`, { params: query });
      const weatherArray = weather.data;
      console.log(weatherArray);
      this.setState({ currentWeatherArray: weatherArray });
    }
    catch(err) {
      console.log('error', this.state.currentWeatherArray);
    }
  }

  getMovies = async() => {
    try{
      const SERVER = process.env.REACT_APP_SERVER;
      const query = { query: this.state.searchQuery};
      const movies = await axios.get(`${SERVER}/movies`, { params: query });
      console.log("Movie Results:", movies);
      const movieArray = movies.data;
      this.setState({ movieList: movieArray });
    }
    catch(err) {
      console.log('error', err);
    }
  }
  render(){
    // console.log('movies:', this.state.movieList);
    return(
      <Container  className="main-body" fluid="true" >
        <Form onSubmit={this.getLocationInfo}>
          <Form.Group className="text-center" controlId="formBasicEmail">
            <Form.Control variant="info" className="form-control" size="lg" onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="Enter A City" />
          </Form.Group>
          <Button className="explore-buttton"variant="info" type="submit">
            EXPLORE!
          </Button>
        </Form>
        <Forecast 
          location={this.state.location}
          dailyWeather={this.state.currentWeatherArray}
        />
        <Movies
          city={this.state.searchQuery}
          list={this.state.movieList}
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
      </Container>
    )
  }    
}

export default FormInput;
