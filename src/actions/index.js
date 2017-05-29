import axios from 'axios';

import {OWM_KEY} from '../config';
let ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OWM_KEY}&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  let url = `${ROOT_URL}&q=${city},us`;
  let request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    // Because the payload is a "promise", redux-promise stops the action,
    // and when the "promise" finishes, it dispatches a new action of the same "type",
    // but with a payload of the resolved request
    payload: request
  };
}
