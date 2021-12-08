// books.js
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  books: [],
};

// Actions
export const addBook = (newBook) => ({
  type: ADD_BOOK,
  payload: newBook,
});
export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((books) => books.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
