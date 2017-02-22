// =============================================================
// 
// 	nav.js
//
// =============================================================

import React, { Component } from 'react';

export default class Nav extends Component {
  checkState(){
  	
  }
  render() {
    return (
    	<header>
		<nav className="navbar navbar-fixed-top navbar-dark">

		    <div className="container nav-container">

		        <div className="navbar-toggleable-xs" id="collapseEx2">
		            <h1 className="navbar-brand animated slideInDown"><img src="src/img/dish-512.png" alt="restaurant reviewer icon"/>Restaurant Reviewer - v1.25</h1>
		        </div>

		    </div>
		
		</nav>
		</header>
    );
  }
}