// =============================================================
// 
//  restaurant_post_review.js
//  
// =============================================================


import React, { Component } from 'react';
import { connect } from 'react-redux';
import postReview from '../actions/post_review';

import Reviews from '../components/reviews';

function setState(stateBinding){
	this.setState({
			name: state.target.value,
		});
	console.log(this.state.name);
};
class PostReview extends Component {

	constructor(props){
		super(props);
		
		this.state = {
			name: '',
			rating: '2',
			gender: '',
			comment: ''
		};

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
		//console.log(this.state.name);
	}
	postRating(rating){

		this.setState({
			rating: rating.target.value,

		});
		//console.log(this.state.rating);
	}
	postComment(comment){

		this.setState({
			comment: comment.target.value
		});
		//console.log(this.state.comment);
	}
	postGender(gender){

		this.setState({
			gender: gender.target.value
		});
		//console.log(this.state.gender);
	}
	// creates the function to apply the outro animation to the restaurant list when the restaurant details are expanded
	listHide(){
		
	}
	renderReview(){
		var rating = parseInt(this.state.rating);	
		var date = function js_yyyy_mm_dd_hh_mm_ss () {
			  var now = new Date();
			  var year = "" + now.getFullYear();
			  var month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
			  var day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
			  var hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
			  var minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
			  var second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
			  return year + "-" + month + "-" + day; //commenting out hour format for now " + hour + ":" + minute + ":" + second;
			}();

		return (
			<div >
				<Reviews image={this.state.gender} name={this.state.name} date={date} rating={rating} comment={this.state.comment} />
			</div>
		);
	}
	postReview(event){
		event.preventDefault();
		// console.log("Current state name:" + this.state.name);
		// console.log("Current state rating:" + this.state.rating);
		// console.log("Current state rating:" + this.state.gender);
		// console.log("Current state comment:" + this.state.comment);
		// console.log("Current state date:" + this.state.date);
		var reviewContainer = document.querySelector('#reviewPost');
		var ratingPicker = document.querySelector('#ratingPicker');
		var revealReview = document.querySelector('#revealReview');
		var postContent = document.querySelector('#postContent');

		reviewPost.classList.remove('hidden');
		reviewPost.classList.add('fadeInUp')
		
		revealReview.classList.remove('hidden', 'fadeOut');
		revealReview.classList.add('fadeIn');

		postContent.classList.remove('fadeInUp');
		postContent.classList.add('fadeOutDown');
		setTimeout(function(){postContent.classList.add('hidden')}, 500);
	}
	render() {
		return (
				<div>
					<section id="reviewPost" className="col-md-12 hidden animated">
						{this.renderReview()}
					</section>
					<section id="postContent" className="col-md-12 animated postReview">
						
						<div className="form-group">
							<form id="">
							
								<div className="selectPicker">
								
									<label className="hidden" htmlFor="ratingPicker">Select a Rating</label>
									<select 
										id="ratingPicker"
										className="form-control col-md-6 col-sm-12"
										onChange={rating => this.postRating(rating)}
										autofocus
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
								<button className="btn" onClick={event => this.postReview(event)}>Post your review</button>

							</form>
						</div>
					</section>
				</div>
		);
	}

};

export default connect(null, {postReview}) (PostReview);