// imported two different functions from the same library, here's how:
import React from 'react';
import { Component } from 'react';

// imports our booklist
import RestaurantList from '../containers/restaurant_list';

// imports our bookdetail
import RestaurantDetail from '../containers/restaurant_detail';

export default class App extends Component {
  render() {
    return (
      <div>
      	<RestaurantDetail />
      	<RestaurantList />
      </div>
    );
  };
};
