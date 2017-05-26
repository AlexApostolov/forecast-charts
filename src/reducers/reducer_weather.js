import {FETCH_WEATHER} from '../actions/index';

// State will be a list data structure because there'll be multiple weather components rendered
export default function(state = [], action) {
  // Handle only the fetchWeather action type
  switch (action.type) {
    case FETCH_WEATHER:
      // Return the multiple cities' "data" property and add to, without mutating, existing state
      // NOTE: new array returned is with the new data at the top/front unlike if we did the same thing with ES5's concat
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
  }
  return state;
}
