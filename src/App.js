import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
// import Reserve from './Pages/ReservationPayment/ReservationPay';
import ReservationSearchForm from './components/ReservationSearchForm/ReservationSearchForm';
import PayWith from './Pages/PayWithCard/PayWith';
// import BookNow from './Pages/ListingDetails/listingdetails';
import ListingDetails from './Pages/ListingDetails/listingdetails';
import { ListingsProvider } from './components/ListingsContext/listingsContext';



function App() {

  return (
    <ListingsProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/payment/search' element={<ReservationSearchForm />} />
        <Route path='/payment' element={<PayWith />} />
        <Route path='/details/:id' element={<ListingDetails />} />
      </Routes>
    </ListingsProvider>

  );
}
export default App;
