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

		{ image: '', category: 'Oriental', title: 'Pho dac biet', description: 'Order your favorite Vietnamese cousine, delivery available', ldescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus mi arcu, in lobortis risus vehicula quis. Proin pellentesque turpis eget lectus tincidunt, ut ornare velit imperdiet. Duis finibus nunc eget ante cursus, sit amet feugiat augue viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis congue risus sem, varius mattis mi dictum sed. Nullam vitae iaculis odio, ac finibus odio. In laoreet a tellus quis gravida. Aliquam venenatis, velit aliquet euismod convallis, nisl sem ultrices mauris, sit amet gravida dui nunc a lectus.' },
		{ title: 'Javascript: The Good Parts', pages: 101 },
		{ title: 'Javascript: The Good Parts', pages: 101 },
		{ title: 'Javascript: The Good Parts', pages: 101 },
		{ title: 'Javascript: The Good Parts', pages: 101 },
		{ title: 'Javascript: The Good Parts', pages: 101 },
		{ title: 'Javascript: The Good Parts', pages: 101 },
		{ title: 'Harry Potter', pages: 39},
		{ title: 'Dark Tower', pages: 85},
		{ title: 'Eloquent Ruby', pages: 1}
	
	];
};

export default restaurantReducer;