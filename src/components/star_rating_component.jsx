// =============================================================
// 
// 	star_rating_component.js
//
// =============================================================

// this was created to add non-editable star component for each restaurant list / detail

import React, {Component} from 'react';
import StarRating from 'react-star-rating';

export default class StarRatingWidget extends Component {
  render() {
    return (
        <StarRating name="rating" totalStars={5} rating={this.props.rating} size={30}/>
    );
  }
}