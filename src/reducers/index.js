// =============================================================
// 
// 	reducers/index.js
//
// =============================================================
// 
// more on reducers here : http://redux.js.org/docs/basics/Reducers.html
// in short, a reducer is a function that returns a piece of the application's state / model / data
// reducers produce the VALUE of our state
// good to keep in mind that each piece of the app should be named after the folder its in, to be concise

// imports combineReducers component from 'redux'
import { combineReducers } from 'redux';

// imports the data from reducer_books.js
import RestaurantReducer from './reducer_restaurants';

// imports our ActiveBook reducer
import ActiveBook from './reducer_active_book';

// this function below is what maps our state reducers, joining all of them together for react to use
// any key set in here, is attached to our GLOBAL STATE not COMPONENT state, two different things entirely
// 
// Also, reducers are manipulated by ACTIONS, and ACTIONS are what controll the manipulation of data  contained within REDUCERS
// 
const rootReducer = combineReducers({

	// this assigns the book key to our bookReducer function
	// where book is the key of the data state
	// and booksReducer is the value of that data state
	books: RestaurantReducer,

	// assigns our key and value of the ActiveBook reducer
	activeBook: ActiveBook

});

export default rootReducer;
