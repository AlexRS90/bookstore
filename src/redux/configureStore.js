import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducer = combineReducers({
  book: booksReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
