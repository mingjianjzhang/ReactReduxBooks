import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
const rootReducer = combineReducers({ //adds a key to the global application state
	books: BooksReducer,
	activeBook: ActiveBook
});

export default rootReducer;
