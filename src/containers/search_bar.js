import {Button, ControlLabel, Form, FormGroup, FormControl} from 'react-bootstrap';
import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};

    // Overwrite the local method with explicit binding to SearchBar
    this.onInputChange = this.onInputChange.bind(this);
  }

  // Event object passed is from vanilla JavaScript DOM handlers: onclick, onhover, onscroll, onchange...
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
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
