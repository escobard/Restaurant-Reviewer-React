// =============================================================
// 
// 	restaurant_detail.jsx
//
// =============================================================

import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRatingWidget from '../components/star_rating_component';
import Reviews from '../components/reviews';
import PostReview from './restaurant_post_review';
import ScrollToTop from 'react-scroll-up';

class RestaurantDetail extends Component {

	// creates the function to apply the outro animation to the restaurant list when the restaurant details are expanded
	restaurantHide(){

		var restaurantDetails = document.querySelector('.restaurantDetails');
		var restaurantList = document.querySelector('.restaurantList');
		var postReview = document.querySelector('#postReview');
		var reviewPost = document.querySelector('#reviewPost');
		restaurantDetails.classList.remove('fadeInDown');
		restaurantDetails.classList.add('fadeOut');
		restaurantDetails.classList.add('heightHidden');
		setTimeout(function(){
			restaurantDetails.classList.add('hidden');
		}, 1000);
		
		// handles views for the restaurant list
		restaurantList.classList.remove('fadeOutDown');
		restaurantList.classList.remove('hidden');
		restaurantList.classList.add('fadeInUp');
		
		// handles views for the postReview
		postReview.classList.add('hidden');
		postReview.classList.remove('fadeInUp');

		// handles views for the reviewPost
		reviewPost.classList.add('hidden');
		reviewPost.classList.remove('fadeInUp');
	}

	renderComments(){
		return this.props.restaurant.reviews.map((reviews) => {
		const rating = parseInt(reviews.rating);			
			return (
			<section className="col-md-12" key={reviews.name}>
				<Reviews image={reviews.image} name={reviews.name} date={reviews.date} rating={rating} comment={reviews.comments} />
			</section>
			);
		})
	}
	postReview(event){
		event.preventDefault();
		var postReview = document.querySelector('#postReview');
		var revealReview = document.querySelector('#revealReview');
		var postContent = document.querySelector('#postContent');

		postReview.classList.remove('hidden');
		postReview.classList.add('fadeInUp');
		
		revealReview.classList.remove('fadeIn');
		revealReview.classList.add('fadeOut');
		setTimeout(function(){revealReview.classList.add('hidden')}, 500);

		postContent.classList.remove('fadeOutDown', 'hidden');
		postContent.classList.add('fadeInUp');

	}
	resetHeight() {
		setTimeout(function(){
			var body = document.body;
			body.setAttribute("style", "position: relative"); // Multiple style properties
			// console.log('HEIGHT RESET');
		}, 1000);
	}
	render(){
		{this.resetHeight()}
		if (!this.props.restaurant){
			return (
			
				<div></div>

			);
		}
		
		const rating = parseInt(this.props.restaurant.rating);
		return (
		<div className="col-md-12 restaurantDetails animated fadeInDown">
			<div className="returnTop" onClick={() => this.restaurantHide()}>
				<img src="src/img/left-arrow.png" alt="Return to restaurant list."/>
				<span className="tooltiptext">Return to selection</span>
			</div>
			<article className="card">

			    <img className="img-fluid" src={this.props.restaurant.image} alt={this.props.restaurant.alt} />

			    <div className="card-block">

			        <div className="col-md-12 restaurantTitle">

                		<h1 className="h1-responsive">{this.props.restaurant.title} <br />
                    		<small className="text-muted"> {this.props.restaurant.category}</small>
                		</h1>

            		</div>

            		<div className="detailContainer">

						<div className="starRating">
							<StarRatingWidget rating={rating}/>
						</div>

						<div className="restaurantDescription"> {this.props.restaurant.ldescription} </div>
						<div className="detailBottom first">

							<span className="restaurantHours">Hours of operation: <small>{this.props.restaurant.hours}</small></span>

							<span className="restaurantAddress">Address: <small>{this.props.restaurant.address}</small></span>

						</div>
						<div className="reviewContainer"> 
							<h2>Reviews</h2>
							{this.renderComments()} 
							<div id="postReview" className="hidden animated">
								<PostReview />
							</div>
						</div>


						<div className="detailBottom last">

							<span className="restaurantPrice">${this.props.restaurant.price} <small>avarage</small></span>
							<div className="return">
							    <ScrollToTop showUnder={0}>
									<button className="btn btn-primary" onClick={() => this.restaurantHide()}>Return to selection</button>
								</ScrollToTop>
							</div>
						    <button id="revealReview" className="btn btn-primary animated" onClick={event => this.postReview(event)}>Post a Review</button>

						</div>

					</div>

			    </div>

			</article>

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