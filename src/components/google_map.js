import React, {Component} from 'react';

class GoogleMap extends Component {

  componentDidMount() {
    // Embed map, after the component mounted, inside "map" node
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        // Key names are for Google while values are named according to OpenWeatherMap
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
