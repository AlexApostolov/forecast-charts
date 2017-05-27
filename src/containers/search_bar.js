import {Button, ControlLabel, Form, FormGroup, FormControl} from 'react-bootstrap';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};

    // Overwrite the local method with explicit binding to SearchBar
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // Event object passed is from vanilla JavaScript DOM handlers: onclick, onhover, onscroll, onchange...
  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    // Go and fetch weather data
    this.props.fetchWeather(this.state.term);
    // Then clear search input
    this.setState({term: ''});
  }

  componentDidMount() {
   // Fetch weather for default city
   const cities = ['Miami'];
   cities.map((city) => this.props.fetchWeather(city));
}

  render() {
    return (
      <Form onSubmit={this.onFormSubmit} inline>
        <FormGroup>
          <ControlLabel>Search</ControlLabel>
          {' '}
          <FormControl
            type="text"
            placeholder="Get a five-day forecast"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <Button type="submit" bsStyle="primary">Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

// No state needed here--no mapStateToProps to pass in--so "null" passed instead
// Now there is access to the action creator as this.props.fetchWeather
export default connect(null, mapDispatchToProps)(SearchBar);
