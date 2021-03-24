import React from 'react';


class Map extends React.Component {
  render() {
    return(
      <>
        <img src={this.props.imgSrc} alt="Map view of city"/>
      </>
    )
  }
}

export default Map;