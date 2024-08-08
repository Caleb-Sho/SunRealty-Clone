// src/App.js
import React from 'react';
import '../ReservationPayment/ReservationPay.css';
// import Navbar from '../../components/Navbar';
import ReservationSearchForm from '../../components/ReservationSearchForm/ReservationSearchForm';
import ReservationResults from '../../components/ReservationResults/ReservationResults';
import SiteFooter from '../../components/SiteFooter/SiteFooter';


const Reserve = () => {
  // Mock results for demonstration purposes
  const mockResults = [
    { title: 'Reservation 1', description: 'Description 1' },
    { title: 'Reservation 2', description: 'Description 2' },
    // Add more results as needed
  ];

  return (
    <div className="App">
      
      <main>
        <ReservationSearchForm />
        {/* <ReservationResults results={mockResults} /> */}
      </main>
      <SiteFooter />
    </div>
  );
};

export default Reserve;
