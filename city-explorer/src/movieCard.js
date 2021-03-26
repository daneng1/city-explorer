import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class MovieCard extends React.Component {
  render() {
    return(
      <>
        {this.props.data.map((value, key) => (
          <Card className="cardDisplay" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Img alt="movie poster" variant="top" src={value.poster} />
              <Card.Title>{value.title}</Card.Title>
              <Card.Text className="cardText">{value.overview}</Card.Text>
              <Card.Text>Released: {value.releaseDate}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>
    )
  }
}

export default MovieCard;