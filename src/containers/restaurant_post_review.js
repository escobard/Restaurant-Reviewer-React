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
import postReview from '../actions/post_review'

// THESE CLASSES MUST HAVE A CAPITAL AT THE BEGINNING OR THE CLASS WILL NOT WORK
class PostReview extends Component {
	// sets up the state handler for which books to display
	constructor(props){
		super(props);

		this.state = {

			// sets the post data
			name: '',
			rating: '',
			comment: ''
		};
		
		// binds the search input
		this.postName = this.postName.bind(this);
		this.postRating = this.postRating.bind(this);
		this.postReview = this.postReview.bind(this);
		this.postComment = this.postComment.bind(this);
	}
	// handles the search bar setting of state
	postName(name){

		this.setState({
			name: name.target.value,
		});
		console.log(this.state.name);
	}
	postRating(rating){

		this.setState({
			rating: rating.target.value,

		});
		console.log(this.state.rating);
	}
	postComment(comment){

		this.setState({
			comment: comment.target.value
		});
		console.log(this.state.comment);
	}

	// creates the function to apply the outro animation to the restaurant list when the restaurant details are expanded
	listHide(){
		
	}
	
	postReview(event){
		event.preventDefault();
		console.log("Current state name:" + this.state.name);
		console.log("Current state rating:" + this.state.rating);
		console.log("Current state comment:" + this.state.comment);
		return;
	}
	render() {
		return (
			<section>
				<form id="">
					<input type="text" onChange={name => this.postName(name)} placeholder="type anything"></input>
					<select name="rating" onChange={rating => this.postRating(rating)}>
						<option value="">Select a rating</option>
						<option value="1">1 star</option>
						<option value="2">2 star</option>
						<option value="3">3 star</option>
						<option value="4">4 star</option>
						<option value="5">5 star</option>
					</select>
					<div className="form-group ">
						<div className="col-md-4 ratingPicker">
							<label className="" htmlFor="ratingPicker">Select a Category</label>
							<select 
								id="ratingPicker"
								className="form-control"
								onChange={rating => this.postRating(rating)}
							>
								<option value="">Select a Category</option>
								<option value="oriental">Oriental</option>
								<option value="fast food">Fast Food</option>
								<option value="mexican">Mexican</option>
								<option value="indian">Indian</option>
								<option value="greek">Greek</option>
							</select>
						</div>
					</div>
					<input type="textarea" onChange={comment => this.postComment(comment)} />
					<button onClick={event => this.postReview(event)}></button>
				</form>
			</section>
		);
	}

};

// creates the function to join the action creator with the BookList component, to update the app's state
// anything returned on this function, will end up as .props on the BookList container
function mapDispatchToProps(dispatch) {

	// Whenever selectBook is called, the result should be passed to all of our reducers
	// returns the react function, joining selectBook (the action Creator) to the key : selectBook
	return bindActionCreators({ 

		// this is the KEY the function selectBook is bound to
		// thanks to this key, the property from the action creator gets passed on to this.book
		postReview: 

		// this is the actual selectBook function
		postReview },

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
export default connect(null, mapDispatchToProps) (PostReview);