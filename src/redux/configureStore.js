import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const store = createStore(booksReducer, applyMiddleware(logger));

export default store;
