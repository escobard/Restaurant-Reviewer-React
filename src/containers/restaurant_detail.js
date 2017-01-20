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

class RestaurantDetail extends Component {

	// creates the function to apply the outro animation to the restaurant list when the restaurant details are expanded
	restaurantHide(){

		var restaurantDetails = document.querySelector('.restaurantDetails');
		var restaurantList = document.querySelector('.restaurantList');
		restaurantDetails.classList.remove('fadeInDown');
		restaurantDetails.classList.add('fadeOut');
		restaurantDetails.classList.add('heightHidden');
		setTimeout(function(){
			restaurantDetails.classList.add('hidden');
		}, 1000);
		
		
		// handles classes for the restaurant list
		restaurantList.classList.remove('fadeOutDown');
		restaurantList.classList.remove('hidden');
		restaurantList.classList.add('fadeInUp');

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
						<span> {this.props.restaurant.ldescription} </span>
						<div className="detailBottom">
							<span> {this.props.restaurant.price} </span>
						    <a href="#" className="btn btn-primary"
								onClick={() => this.restaurantHide()}
						    >Return to selection</a>
						    <a href="#" className="btn btn-primary">Leave a comment</a>
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