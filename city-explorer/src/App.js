import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import FormInput from './form';
import background from './assets/derek-story-hDK78echCZg-unsplash.jpg';


class City extends React.Component {

  render() {
    return(
      <>
        <Container  style = {{ backgroundImage: `url(${background})`}} className="App" fluid="true">
          <h1 className="header">City Explorer</h1>
          <FormInput />
        </Container>
      </>
    )
  }  
}

export default City;
