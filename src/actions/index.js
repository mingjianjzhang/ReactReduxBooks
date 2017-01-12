export function selectBook(book) {
	// selectBook is an action-creator that must return an action(object with type property)
	return {
		type: 'BOOK_SELECTED', // always uppercase. usually would be separated into a new app.
		payload: book
	};
}
