import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export default class WeatherList extends Component {
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </Table>
    )
  }
}
