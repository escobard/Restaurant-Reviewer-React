// =============================================================
// 
// 	book_detail.js
//
// =============================================================

// since the book detail (meaning the area that displays the ACTIVE BOOK) makes use of this app's reducers, this is created as a 
// CONTAINER not a component

import React, { Component } from 'react';

// since this component is a container, the connect function must be included
import { connect } from 'react-redux';

class RestaurantDetail extends Component {

    // in short this returns the details of the activeBook
	render(){

		// since the state of our book is currently NULL, react throws an error which breaks the app because it expects
		// the inital state to not be null. this happens because we have not yet selected a book to generate that state
		// to fix this, we need to create a statement which catches the error, and does something instead if state=null
		// this is one workaround
		if (!this.props.restaurant){
			return (
			
				<div className="col-md-12 mainTitle ">
                    <h1 className="h1-responsive">Select a restaurant
                        <small className="text-muted"> to get started</small>
                    </h1>
                </div>

			);
		}

		return (
		<div>
			
			<article className="card restaurantDetails animated slideInDown">

			    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" alt="Card image cap" />

			    <div className="card-block">

			        <div className="col-md-12 mainTitle">
                		<h1 className="h1-responsive">{this.props.restaurant.title} 
                    		<small className="text-muted"> {this.props.restaurant.category}</small>
                		</h1>
            		</div>
            		<div className="detailContainer">
						<img src={this.props.restaurant.image} />
						<span> {this.props.restaurant.rating} </span>
						<span> {this.props.restaurant.ldescription} </span>
						<div className="detailBottom">
							<span> {this.props.restaurant.price} </span>
						    <a href="#" className="btn btn-primary">Button</a>
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