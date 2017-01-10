// =============================================================
// 
// 	book_detail.js
//
// =============================================================

// since the book detail (meaning the area that displays the ACTIVE BOOK) makes use of this app's reducers, this is created as a 
// CONTAINER not a component

import React, { Component } from 'react';

// since this component is a container, the connect function must be included
import { connect } from 'react-redux';

class RestaurantDetail extends Component {

    // in short this returns the details of the activeBook
	render(){

		// since the state of our book is currently NULL, react throws an error which breaks the app because it expects
		// the inital state to not be null. this happens because we have not yet selected a book to generate that state
		// to fix this, we need to create a statement which catches the error, and does something instead if state=null
		// this is one workaround
		if (!this.props.restaurant){
			return (
			
				<div>Select a restaurant to get started.</div>

			);
		}

		return (
		<div>


			<h3>
			Extended Description for: 
			</h3>
			<img src={this.props.restaurant.image} />
			<h4> {this.props.restaurant.category} </h4>
			<h3> {this.props.restaurant.title} </h3>
			<span> {this.props.restaurant.rating} </span>
			<span> {this.props.restaurant.description} </span>
			<span> {this.props.restaurant.price} </span>
			<span> {this.props.restaurant.ldescription} </span>
			<span>Pages: {this.props.restaurant.pages}</span>
		</div>
		);
	}
	
}

// for more on how this works, refer to book_list.js
function mapStateToProps(state){
	
	// again, whatever we return from here is usable by the BookDetails class, under props
	return {
		
		restaurant: state.activeRestaurant

	};

}

// connects the activeBook reducer to this component, making it a container by definition
export default connect (mapStateToProps) (RestaurantDetail);