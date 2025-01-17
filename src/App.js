import './App.css';
import React, {useReducer} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './components/HomePage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';

function App() {

  const userInputs = {
    userFullName:'',
    userEmail:'',
    userPhoneNumber:'05',
    bookingDate:'',
    bookingTime:'',
    numOfGuests:'',
    tablePreference:'',
    tableLocation:'',
    tableOccasion:'',
    additionalRequest:'',
    termsAndCondition:false,
    subscripeToUpdates:false,
  }

  const userInputsReducer = (state,action)=>{
    switch (action.type){
      case "SET_NAME":
        return{...state,userFullName:action.payload}
      case "SET_EMAIL":
        return{...state,userEmail:action.payload}
      case "SET_PHONE":
        return{...state,userPhoneNumber:action.payload}
      case "SET_DATE":
        return{...state,bookingDate:action.payload}
      case "SET_TIME":
        return{...state,bookingTime:action.payload}
      case "SET_GUESTS":
        return{...state,numOfGuests:action.payload}
      case "SET_PREFERENCE":
        return{...state,tablePreference:action.payload}
      case "SET_LOCATION":
        return{...state,tableLocation:action.payload}
      case "SET_OCCASION":
        return{...state,tableOccasion:action.payload}
      case "SET_REQUEST":
        return{...state,additionalRequest:action.payload}
      case "SET_TERMS":
        return{...state,termsAndCondition:action.payload}
      case "SET_UPDATES":
        return{...state,subscripeToUpdates:action.payload}
    }
  }

  const [state,dispatch] = useReducer(userInputsReducer,userInputs)

  return(
    <>
      <script src="https://raw.githubusercontent.com/courseraap/capstone/main/api.js"></script>
      <header>
        <NavigationBar/>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/BookingPage' element={<BookingPage state={state} dispatch={dispatch}/>} />
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
