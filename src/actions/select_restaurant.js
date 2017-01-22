// =============================================================
// 
// actions/select_restaurant.js
// 
// =============================================================
// 
// Actions create objects which are passed to the reducer, and then if true, passed to the application state, updating the application
// state if the action condition is true

// note, action creator functions within react must contain objects within their scope, otherwise it returns an error
// book is passed from book_list.js thanks to the connect function
function selectRestaurant(restaurant){

	// selectBook is an ActionCreator it needs to return an action, an object with a type property
	// each action usually contains a type, and a payload.
	// type of the action and payload actually returns the action itself
	return {

		// defines the type of action
		// TYPE key value is alway required by Redux
		type: 'RESTAURANT_SELECTED',

		// defines the value of the action, or the payload
		// in this case it would be a single book object from the books json
		// this is an optional key value, not required by redux. anything else can be passed in an action along with the type.
		// the PAYLOAD key is created for convinience, so we can pass its value to other components
		payload: restaurant
	};
};

// this needs to be attached over to book_list.js and the rest of the app, so we export
export default selectRestaurant;