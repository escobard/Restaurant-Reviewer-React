// =============================================================
// 
//  restaurant_post_review.js
//  
// =============================================================


import React, { Component } from 'react';

// imports the redux library, to forge a connection between the state and the main application
// imports the connect function
import { connect } from 'react-redux';

// imports the function within react to bind action creators to components
import { bindActionCreators } from 'redux';

// imports action creators
import postReview from '../actions/select_restaurant'

// THESE CLASSES MUST HAVE A CAPITAL AT THE BEGINNING OR THE CLASS WILL NOT WORK
class RestaurantList extends Component {
	// sets up the state handler for which books to display
	constructor(props){
		super(props);

		this.state = {

			// sets the post data
			postData: {}
		};
		
		// binds the search input
		this.searchInputChange = this.searchInputChange.bind(this);
	}
	// handles the search bar setting of state
	searchInputChange(event){

	}
	// creates the function to apply the outro animation to the restaurant list when the restaurant details are expanded
	listHide(){
		
	}


	// this sets up the component for our booklist's HTML
	render() {

		//DONT FORGET TO RETURN HERE, JUST SPENT AN HOUR DEBUGGING THIS AREA
		return (
		);
	}

};

// exactly how it sounds, it maps the state into the props method
// whatever returns, will show up as this.props inside of BookList
// this is a built in function of React
function mapStateToProps(state) {
	
	// for example, this will add asdf to props, making it callable by using this.props.asdf
	/* return {
	asdf: '123'
	};
	*/

	// this defines the state of this component
	return {
		// this is the KEY or what we want to call what is attached to this component's .props
		restaurants: 
		// this is the actual DATA of the KEY books within reducers.js, which contains the JSON info
		// within reducer_books.js
		state.restaurants

	};

};

// creates the function to join the action creator with the BookList component, to update the app's state
// anything returned on this function, will end up as .props on the BookList container
function mapDispatchToProps(dispatch) {

	// Whenever selectBook is called, the result should be passed to all of our reducers
	// returns the react function, joining selectBook (the action Creator) to the key : selectBook
	return bindActionCreators({ 

		// this is the KEY the function selectBook is bound to
		// thanks to this key, the property from the action creator gets passed on to this.book
		selectRestaurant: 

		// this is the actual selectBook function
		selectRestaurant },

		// this is the argument
		// 
		// this actually BINDS the arguments above (selectBook) to all our reducers. If this function is called, 
		// its passed to all the reducers, changing their state if needed
		dispatch)

}

// this connects the two functions in this container together when exported
// connect takes a function, and a component (class only), and produces a container
// a container is again a component that connects react with the redux state
// 
// binds the original reducer state change and action creators to the BookList component
// 
// essentially this promotes BookList from a component to a container - react needs to know 
// about this new component selection method, selectBook.
export default connect(mapStateToProps, mapDispatchToProps) (RestaurantList);