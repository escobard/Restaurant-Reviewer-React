// =============================================================
// 
// 	reviews.js
//
// =============================================================

import React, { Component } from 'react';

export default class Reviews extends Component {
  	// adds review image based on user gender
	renderReviewImage(reviewImage){
		    if (reviewImage === "male"){
		        return (
		        	<img src="../../img/user-male.png" alt="male profile picture"/>
		        );
		    }
		    else if (reviewImage === "female"){
		    	return (
		        <img src="../../img/user-female.png" alt="female profile picture"/>
		        );
		    }
			else {
		        return (
		        	<img src="../../img/user-male.png" alt="male profile picture"/>
		        );
		    }
	}	

  render() {
    return (
    	<div className="restaurantReview col-md-12" key={reviews.name}>
					<div className="userDetails col-md-4">
						{this.renderReviewImage(reviews.image)}
						<span>{reviews.name}</span>
						<span>{reviews.date}</span>

					</div>
					<div className="reviewDetails col-md-8">
						<div className="starContainer col-md-12"><StarRatingWidget rating={rating} /></div>	
						<span className="col-md-12">"{reviews.comments}"</span>
					</div>
					
		</div>
    );
  }
}