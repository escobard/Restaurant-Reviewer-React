// =============================================================
// 
// 	reviews.js
//
// =============================================================

import React, { Component } from 'react';

// imports star rating component
import StarRatingWidget from './star_rating_component';

export default class Reviews extends Component {
	constructor(props){
		super(props);
	}
  	// adds review image based on user gender
	renderReviewImage(reviewImage){
		    if (reviewImage === "male"){
		        return (
		        	<img src="img/user-male.png" alt="male profile picture"/>
		        );
		    }
		    else if (reviewImage === "female"){
		    	return (
		        <img src="img/user-female.png" alt="female profile picture"/>
		        );
		    }
			else {
		        return (
		        	<img src="img/user-male.png" alt="male profile picture"/>
		        );
		    }
	}	

  render() {
    return (
    	<div className="restaurantReview">
					<div className="userDetails col-md-4">
						{this.renderReviewImage(this.props.image)}
						<span>{this.props.name}</span>
						<span>{this.props.date}</span>
					</div>
					<div className="reviewDetails col-md-8">
						<div className="starContainer col-md-12"><StarRatingWidget rating={this.props.rating} /></div>	
						<span className="col-md-12 reviewComment">"{this.props.comment}"</span>
					</div>
					
		</div>
    );
  }
}