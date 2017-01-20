// =============================================================
// 
//  app.js
//
// =============================================================

// imported two different functions from the same library, here's how:
import React, { Component } from 'react';

// imports our booklist
import RestaurantList from '../containers/restaurant_list';

// imports our bookdetail
import RestaurantDetail from '../containers/restaurant_detail';

// custom components
import Nav from './nav';
import Footer from './footer';


export default class App extends Component {
  render() {
    return (
      <div>
		<Nav />
		<main className="container">
      	<RestaurantDetail />
      	<RestaurantList />
      	</main>
		<Footer />
      </div>
    );
  };
};
