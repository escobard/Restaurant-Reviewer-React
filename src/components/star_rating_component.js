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
      <form action="/api" method="POST">
        <StarRating name="airbnb-rating" caption="Rate your stay!" totalStars={5} rating={3} />
        <button type="submit" className="btn btn-submit">Submit Rating</button>
      </form>
    );
  }
}