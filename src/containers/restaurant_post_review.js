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
import postReview from '../actions/post_review';

import Reviews from '../components/reviews';

// THESE CLASSES MUST HAVE A CAPITAL AT THE BEGINNING OR THE CLASS WILL NOT WORK
function setState(stateBinding){
	this.setState({
			name: state.target.value,
		});
	console.log(this.state.name);
};
class PostReview extends Component {
	// sets up the state handler for which books to display
	constructor(props){
		super(props);
		
		this.state = {

			// sets the post data
			name: '',
			rating: '',
			gender: '',
			comment: '',
			date: ''
		};
		
		// binds the search input
		this.postName = this.postName.bind(this);
		this.postRating = this.postRating.bind(this);
		this.postReview = this.postReview.bind(this);
		this.postComment = this.postComment.bind(this);
		this.renderReview = this.renderReview.bind(this);
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
	postGender(gender){

		this.setState({
			gender: gender.target.value
		});
		console.log(this.state.gender);
	}
	// creates the function to apply the outro animation to the restaurant list when the restaurant details are expanded
	listHide(){
		
	}
	renderReview(){
		var rating = parseInt(this.state.rating);	
		// to convert date from : http://stackoverflow.com/questions/13459866/javascript-change-date-into-format-of-dd-mm-yyyy
		var date = Date();
		return (
			<div>
				<Reviews image={this.state.gender} name={this.state.name} date={date} rating={rating} comment={this.state.comment} />
			</div>
		);
	}
	postReview(){
		console.log("Current state name:" + this.state.name);
		console.log("Current state rating:" + this.state.rating);
		console.log("Current state rating:" + this.state.gender);
		console.log("Current state comment:" + this.state.comment);
		console.log("Current state date:" + this.state.date);
		var reviewContainer = document.querySelector('reviewPost');
		reviewPost.classList.remove('hidden');
		
	}
	render() {
		return (
				<div>
					<section id="reviewPost" className="col-md-12 hidden">
						{this.renderReview()}
					</section>
					<section className="col-md-12 postReview">
						
						<div className="form-group">
							<form id="">
							
								<div className="selectPicker">
								
									<label className="hidden" htmlFor="ratingPicker">Select a Rating</label>
									<select 
										id="ratingPicker"
										className="form-control col-md-6 col-sm-12"
										onChange={rating => this.postRating(rating)}
									>
										<option value="">Select a rating</option>
										<option value="1">1 star</option>
										<option value="2">2 star</option>
										<option value="3">3 star</option>
										<option value="4">4 star</option>
										<option value="5">5 star</option>
									</select>
									<label className="hidden" htmlFor="genderPicker">Select a Gender</label>
									<select 
										id="genderPicker"
										className="form-control col-md-6 col-sm-12"
										onChange={gender => this.postGender(gender)}
									>
										<option value="">Select a gender</option>
										<option value="male">Male</option>
										<option value="female">Female</option>
										<option value="pntd">Prefer not to disclose</option>
									</select>
								</div>
								<div className="textArea">
									<input type="text" onChange={name => this.postName(name)} placeholder="Please enter your name"></input>
									<input type="text" onChange={comment => this.postComment(comment)} placeholder="Leave us a review!"/>
								</div>
								<button className="btn" onClick={() => this.postReview()}>Post your review</button>

							</form>
						</div>
					</section>
				</div>
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