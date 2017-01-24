// =============================================================
// 
// 	restaurant_detail.js
//
// =============================================================

// since the book detail (meaning the area that displays the ACTIVE BOOK) makes use of this app's reducers, this is created as a 
// CONTAINER not a component

import React, { Component } from 'react';

// since this component is a container, the connect function must be included
import { connect } from 'react-redux';

// imports star rating component
import StarRatingWidget from '../components/star_rating_component';

// imports review component
import Reviews from '../components/reviews';

// imports post container
import PostReview from './restaurant_post_review';


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
		postReview.classList.remove('hidden');
		postReview.classList.add('fadeInUp');
	}
	render(){

		if (!this.props.restaurant){
			return (
			
				<div></div>

			);
		}
		
		const rating = parseInt(this.props.restaurant.rating);
		return (
		<div className="col-md-12 restaurantDetails animated fadeInDown">
			
			<article className="card">

			    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" alt="Card image cap" />

			    <div className="card-block">

			        <div className="col-md-12 restaurantTitle">

                		<h1 className="h1-responsive">{this.props.restaurant.title} 
                    		<small className="text-muted"> {this.props.restaurant.category}</small>
                		</h1>

            		</div>

            		<div className="detailContainer">

						<img src={this.props.restaurant.image} />

						<div className="starRating">
							<StarRatingWidget rating={rating}/>
						</div>

						<div className="restaurantDescription"> {this.props.restaurant.ldescription} </div>
						<div className="reviewContainer"> 
							<h2>Reviews</h2>
							{this.renderComments()} 
							<div id="postReview" className="hidden animated">
								<PostReview />
							</div>
						</div>
						<div className="detailBottom first">

							<span className="restaurantHours">Hours of operation: <small>{this.props.restaurant.hours}</small></span>

							<span className="restaurantAddress">Address: <small>{this.props.restaurant.address}</small></span>

						</div>

						<div className="detailBottom">

							<span className="restaurantPrice">${this.props.restaurant.price} <small>avarage</small></span>

						    <button className="btn btn-primary" onClick={() => this.restaurantHide()}>Return to selection</button>

						    <button className="btn btn-primary" onClick={event => this.postReview(event)}>Post a Review</button>

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