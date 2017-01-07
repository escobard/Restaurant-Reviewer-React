// =============================================================
// 
// reducer_active_book.js
// 
// =============================================================

// creates our reducer component
// the arguments state and action:
// all reducers get 2 arguments, the current state, and action
// in other words, reducers are only ever called when an action happens, which in turn changes the state
// of the reducer
// 
// IMPORTANT: state argument is not application state, only the state this reducer is responsible for
// IF the reducer is responsible for the state of a component, then it changes the state of that component, in this case BookList's state
function ActiveRestaurant(state = null, action){

	// this takes the TYPE of action as case 0, 
	switch(action.type){
		
		// if the action.type passed is 'BOOK_SELECTED'
		case 'BOOK_SELECTED':

			// this case will return the action's payload, in this case this is our book
			// try to return a fresh object, leave state manipulation out of the action.type switch statements
			return action.payload;
	}

	// returns default state if switch case is not matched, allowing the reducer flow of data to continue undisturbed
	// if a state is 'undefined', which is what will happen if we do not have a default state for this action, 
	// it will throw an error
	return state;

};

export default ActiveRestaurant;