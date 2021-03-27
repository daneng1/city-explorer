import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import FormInput from './form';


class City extends React.Component {

  render() {
    return(
      <>
        <Container className="App" fluid="true">
          <h1 className="header">City Explorer</h1>
          <FormInput />
        </Container>
      </>
    )
  }  
}

export default City;
