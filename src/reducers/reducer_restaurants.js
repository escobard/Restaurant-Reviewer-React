// =============================================================
// 
// 	reducer_books.js
//
// =============================================================
 
// more on reducers here : http://redux.js.org/docs/basics/Reducers.html
// in short, a reducer is a function that returns a piece of the application's state / model / data
// reducers produce the VALUE of our state
// good to keep in mind that each piece of the app should be named after the folder its in, to be concise

// create the JS to hold the book data
function restaurantReducer() {
	
	// returns an array with our data
	return [

		{ title: 'Javascript: The Good Parts', pages: 101 },
		{ title: 'Harry Potter', pages: 39},
		{ title: 'Dark Tower', pages: 85},
		{ title: 'Eloquent Ruby', pages: 1}
	
	];
};

export default restaurantReducer;