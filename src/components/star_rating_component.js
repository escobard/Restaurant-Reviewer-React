// =============================================================
// 
// 	star_rating_component.js
//
// =============================================================

// this was created to add non-editable star component for each restaurant list / detail

// dependacies
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

export default class StarRating extends Component {
    render() {
        const { rating } = this.state;
        return (                
            <div>
                <h2>Rating from state: {rating}</h2>
                <StarRatingComponent 
                    name="starRating" 
                    editing={false}
                    starCount={5}
                    value={props.value}
                />
            </div>
        );
    }
}