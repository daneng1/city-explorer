import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './movieCard';

class Movies extends React.Component{

  render() {
    return(
      <>
        <Accordion defaultActiveKey="1">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="info" eventKey="0">
                View Movies
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse className="cardBody" eventKey="0">
              <>
                {this.props.list.map((value, key) => (
                  <MovieCard key={key}
                    data={value}
                  />
                ))} 
              </> 
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>  
    )
  }
}

export default Movies;