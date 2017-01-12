import React, { Component } from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index'; // why is selectBook in curly braces if all that is being exported is a single function
import { bindActionCreators } from 'redux';

class BookList extends Component {

	renderList() {
		return this.props.books.map( book => {
			return (
				<li 
					key={book.title} 
					onClick= { () => this.props.selectBook(book) }
					className="list-group-item">
					{book.title}
				</li>
			)
		})
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	// Whatever is returned will show up as a property of props inside of BookList
	return {
		books: state.books 
	};
}

// anything returned from this function will end up as props on the BookList Container
function mapDispatchToProps(dispatch){
	// whenever selectBook is called, the returned action should be passed to all of our reducers, in this case this.props.selectBook
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promote BookList from a component to a container - it needs to know about this new dispatch method selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
