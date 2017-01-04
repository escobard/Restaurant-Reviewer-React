// imported two different functions from the same library, here's how:
import React from 'react';
import { Component } from 'react';

// imports our booklist
import BookList from '../containers/book_list';

// imports our bookdetail
import BookDetail from '../containers/book_detail';

export default class App extends Component {
  render() {
    return (
      <div>
		<BookList />
      	<BookDetail />
      </div>
    );
  };
};
