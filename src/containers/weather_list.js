import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  // Render a single city on a single row
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </Table>
    );
  }
}

// WeatherReducer is assigned in reducers to "weather" key, so we pass "state.weather"
function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
