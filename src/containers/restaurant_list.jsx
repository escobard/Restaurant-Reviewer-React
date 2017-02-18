// =============================================================
// 
// restaurant_list.jsx
//
// =============================================================


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectRestaurant from '../actions/select_restaurant'
import _ from 'lodash';
import StarRatingWidget from '../components/star_rating_component';
import ScrollToTop from 'react-scroll-up';

class RestaurantList extends Component {
	constructor(props){
		super(props);

		this.state = {
			searchTerm:'',
			currentlySelected: this.props.restaurants
		};

		this.searchInputChange = this.searchInputChange.bind(this);
	}
	// handles the category select setting of state
	categoryFilterChange(event){

		// creates filter
		let categoryFilter = _.filter(this.props.restaurants, restaurant => restaurant.category.includes(event.target.value));

		// sets the state based on filter
		this.setState({
			currentlySelected: categoryFilter
		});
		// console.log(this.state.currentlySelected);
	}
	priceFilterChange(event){

		// creates filter
		let priceFilter = _.filter(this.props.restaurants, restaurant => restaurant.price.includes(event.target.value));

		// sets the state based on filter
		this.setState({
			currentlySelected: priceFilter
		});
		// console.log(this.state.currentlySelected);
	}
	ratingFilterChange(event){

		// creates filter 
		let ratingFilter = _.filter(this.props.restaurants, restaurant => restaurant.rating.includes(event.target.value));

		// sets the state based on filter
		this.setState({
			currentlySelected: ratingFilter
		});
		// console.log(this.state.currentlySelected);
	}
	// handles the search bar setting of state
	searchInputChange(event){

		// creates 
		let searchFilter = _.filter(this.props.restaurants, restaurant => restaurant.title.includes(event.target.value.toLowerCase()));

		// sets the state based on filter
		this.setState({
			searchTerm: event.target.value,
			currentlySelected: searchFilter
		});
		// console.log(this.state.searchTerm);
		// console.log(this.state.currentlySelected);
	}
	// creates the function to apply the outro animation to the restaurant list when the restaurant details are expanded
	listHide(){
		
		var restaurantList = document.querySelector('.restaurantList');
		var restaurantDetails = document.querySelector('.restaurantDetails');

		// handles animations when list is hiding
		restaurantList.classList.add('fadeOutDown');
		restaurantList.classList.remove('fadeInUp');

		// handles restaurantHide classes
		restaurantDetails.classList.remove('hidden');
		restaurantDetails.classList.remove('heightHidden');
		restaurantDetails.classList.remove('fadeOut');
		restaurantDetails.classList.add('fadeInDown');

		// hides from the dom after animation is over
		setTimeout(function(){
			restaurantList.classList.add('hidden');
		}, 1000);
		
	}
	
	renderList() {

		return this.state.currentlySelected.map((restaurant) => {

			const rating = parseInt(restaurant.rating);
			return (
			<article className="restaurantCard card col-md-4"
				key={restaurant.title} 
			>

		    <div className="view overlay hm-white-slight">
		        <img src={restaurant.image} className="img-fluid" alt={restaurant.alt} />
		        <a href="#">
		            <div className="mask restaurantDetails"></div>
		        </a>
		    </div>

		    <div className="card-block">
				<h4 className="card-title">{restaurant.title}
				<br/>
				<small> {restaurant.category}</small></h4>
				<StarRatingWidget rating={rating} />
		        <p className="card-text">{restaurant.description}</p>
		        <div className="bottom">
		        	<span className="restaurantPrice">${restaurant.price} <small>avarage</small></span>
						<div className="return">
							    <ScrollToTop showUnder={0}>
							        <a href="#" className="btn btn-primary restaurantOpen"
									onClick={() => {this.props.selectRestaurant(restaurant); this.listHide();}}
							        >
							        Learn More
							        </a>
								</ScrollToTop>
						</div>			        

		        </div>
		    </div>
			</article>
			);
		});
	}

	render() {

		return (
			<section className="restaurantList animated fadeInUp col-md-12">
				<div className="col-md-12 intro card">
		            <h3 className="h3-responsive">Select a restaurant to get started</h3>
		            <div className="search-bar md-form col-md-12">
						<label className="hidden" htmlFor="categoryFilter">Select a Category</label>
						<input 
							id="searchBar"
							className="form-control"
							type="text"
							value={this.state.searchTerm}
							onChange={event => this.searchInputChange(event)}
							autofocus
							placeholder="Filter restaurants by title"
						 />
					 </div>
					<div className="form-group col-md-12">
						<div className="col-md-4 selectFilter">
							<label className="hidden" htmlFor="categoryFilter">Select a Category</label>
							<select 
								id="categoryFilter"
								className="form-control"
								onChange={event => this.categoryFilterChange(event)}
							>
								<option value="">Select a Category</option>
								<option value="oriental">Oriental</option>
								<option value="fast food">Fast Food</option>
								<option value="mexican">Mexican</option>
								<option value="indian">Indian</option>
								<option value="greek">Greek</option>
							</select>
						</div>
						<div className="col-md-4 selectFilter">
							<label className="hidden" htmlFor="priceFilter">Select a Price Range</label>
							<select 
								id="priceFilter"
								className="form-control"
								onChange={event => this.priceFilterChange(event)}
							>
								<option value="">Select a Price</option>
								<option value="10">$10 Avarage</option>
								<option value="15">$15 Avarage</option>
								<option value="20">$20 Avarage</option>
								<option value="25">$25 Avarage</option>
								<option value="30">$30 Avarage</option>
							</select>
						</div>
						<div className="col-md-4 selectFilter">
							<label className="hidden" htmlFor="ratingFilter">Select Rating Range</label>
							<select 
								id="ratingFilter"
								className="form-control"
								onChange={event => this.ratingFilterChange(event)}
							>
								<option value="">Select a Rating</option>
								<option value="2">2 stars</option>
								<option value="3">3 stars</option>
								<option value="4">4 stars</option>
								<option value="5">5 stars</option>
							</select>
						</div>
					</div>
				</div>
				{this.renderList()}
			</section>
		);
	}

};

function mapStateToProps(state) {
	

	return {

		restaurants: 

		state.restaurants

	};

};

function mapDispatchToProps(dispatch) {

	return bindActionCreators({ 

		selectRestaurant: 

		selectRestaurant },

		dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps) (RestaurantList);