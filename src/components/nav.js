// =============================================================
// 
// 	nav.js
//
// =============================================================

import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
    	<header>
		<nav className="navbar navbar-fixed-top navbar-dark">

		    <div className="container nav-container">

		        <div className="navbar-toggleable-xs" id="collapseEx2">
		            <h1 className="navbar-brand animated slideInDown"><img src="img/dish-512.png" alt=""/>Restaurant Reviewer - v1.1</h1>
		        </div>

		    </div>
		
		</nav>
		</header>
    );
  }
}