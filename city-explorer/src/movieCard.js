import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class MovieCard extends React.Component {
  render() {
    return(
      <>
        <Card className="cardDisplay" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Img alt="movie poster" variant="top" src={this.props.data.poster}/>
            <Card.Title>{this.props.data.title}</Card.Title>
            <Card.Text className="cardText">{this.props.data.overview}</Card.Text>
            <Card.Text>Released: {this.props.data.releaseDate}</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default MovieCard;