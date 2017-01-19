import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
    	<header>
		<nav className="navbar navbar-fixed-top navbar-dark">

		    <div className="container nav-container">

		        <div className="navbar-toggleable-xs" id="collapseEx2">
		            <h1 className="navbar-brand animated slideInDown">Restaurant Reviewer - v0.5</h1>
		        </div>

		    </div>
		
		</nav>
		</header>
    );
  }
}