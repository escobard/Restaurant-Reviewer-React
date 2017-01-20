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

export default (props) => {
        return ( 

            <div>
                <StarRatingComponent 
                    name={props.name}
                    editing={props.editing}
                    starCount={props.starcount}
                    value={props.value}
                />
            </div>
        );
}