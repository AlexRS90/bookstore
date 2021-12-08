import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './App.css';
import Navbar from './components/navbar';
import Books from './components/bookReact';
import Categories from './components/categories';

const App = () => (
  <>
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </Provider>
  </>

);

export default App;
