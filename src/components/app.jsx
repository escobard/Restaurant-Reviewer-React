// =============================================================
// 
//  app.jsx
//
// =============================================================

import React, { Component } from 'react';
import RestaurantList from '../containers/restaurant_list';
import RestaurantDetail from '../containers/restaurant_detail';
import Nav from './nav';
import Footer from './footer';
import ScrollToTop from 'react-scroll-up';

export default class App extends Component {
  render() {
    return (
      <div>
		<Nav />
		<main className="container">
      	<RestaurantDetail />
      	<RestaurantList />
    </main>
    <ScrollToTop showUnder={160}>
        <img id="scrollToTop" src="src/img/up-arrow.png" alt="scroll to top"/>
    </ScrollToTop>    
		<Footer />
      </div>
    );
  };
};
