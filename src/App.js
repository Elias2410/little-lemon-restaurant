import './App.css';
import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './components/HomePage';
import BookingForm from './components/BookingPage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';


function App() {
  return(
    <>
      <header>
        <NavigationBar/>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/BookingForm' element={<BookingForm/>} />
        </Routes>
      </BrowserRouter>
      <footer>
        <Footer/>
        <div id='CopyRightText'>
          <p>&copy;2025 Littel Lemon. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default App;
