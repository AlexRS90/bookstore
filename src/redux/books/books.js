import axios from 'axios';
// books.js
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_BOOK = 'FETCH_BOOK';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1aYtBbFkwky6xIiVSTwv/';

const initialState = {
  books: [],
};

const displayBooks = (book) => ({
  type: FETCH_BOOK,
  payload: book,
});

export const fetchBooks = () => {
  const apiURL = `${url}books`;
  return (dispatch) => {
    axios.get(apiURL)
      .then((response) => {
        const { data } = response;
        const books = [];
        Object.entries(data).forEach(([key, val]) => {
          books.push({ id: key, title: val[0].title, category: val[0].category });
        });
        dispatch(displayBooks(books));
      });
  };
};

// Actions
export const addBook = (newBook) => ({
  type: ADD_BOOK,
  payload: newBook,
});

export const addBookAsync = ({ id, title, category }) => {
  const apiURL = `${url}books`;
  return (dispatch) => {
    axios.post(apiURL, {
      item_id: id,
      title,
      category,
    })
      .then((response) => {
        if (response.status === 201) {
          dispatch(addBook({ id, title, category }));
        }
      });
  };
};

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const removeBookAsync = (identify) => {
  const id = identify;
  return (dispatch) => {
    axios.delete(`${url}books/${id}`, {
      item_id: id,
    }).then(dispatch(removeBook(id)));
  };
};

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
    case FETCH_BOOK:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
