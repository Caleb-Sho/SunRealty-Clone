import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
// import Reserve from './Pages/ReservationPayment/ReservationPay';
import ReservationSearchForm from './components/ReservationSearchForm/ReservationSearchForm';
import PayWith from './Pages/PayWithCard/PayWith';



function App() {

  return (
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/payment/search' element={<ReservationSearchForm />} />
        <Route path='/payment' element={<PayWith />} />
      </Routes>

  );
}
export default App;
