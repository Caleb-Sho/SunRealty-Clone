// src/components/ReservationSearchForm.js
import React, { useState } from 'react';
import './ReservationSearchForm.css';
import Site from '../../../src/components/SiteFooter/SiteFooter'
import Notification from '../Notification/NotificationShow';

function ReservationSearchForm () {
    const [confirmationNumber, setConfirmationNumber] = useState('');
    const [checkInDate, setCheckInDate] = useState('');

    const [notificationVisible, setNotificationVisible] = useState(false);

    const handleShareClick = () => {
        setNotificationVisible(true);
        setTimeout(() => {
            setNotificationVisible(false);
        }, 9000); // Hide the notification after 7 seconds
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Handle search logic
        console.log('Search with:', confirmationNumber, checkInDate);
    };

    return (
        <>
        {notificationVisible && (
          <Notification
            message="Attention planners: our website is currently under maintenance, Contact: (206) 414-8973, to book and monitor your reservations!"
            onClose={() => setNotificationVisible(false)}
          />
        )}
        <div>
            <div className='thetopDIvf'>
                <img src='https://d2epyxaxvaz7xr.cloudfront.net/x80/https://track-files.s3.amazonaws.com/sun/image/911c3fb5-5fd5-458d-8769-62fe68873feb'  alt=""/>
                <h5><a href="tel:(206) 414-8973">Reservations: (206) 414-8973 </a></h5>
            </div>
            <div className="reservation-search-form">
                <h2>Search Reservation</h2>
                <form onSubmit={handleSearch}>
                    <div className="form-group">
                        <label htmlFor="confirmationNumber">Reservation Id</label>
                        <input
                            type="text"
                            id="confirmationNumber"
                            value={confirmationNumber}
                            onChange={(e) => setConfirmationNumber(e.target.value)}
                            placeholder="Res Id"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmationNumber">Guest Last Name</label>
                        <input
                            type="text"
                            id="confirmationNumber"
                            value={confirmationNumber}
                            onChange={(e) => setConfirmationNumber(e.target.value)}
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="checkInDate">Checkin Date</label>
                        <input
                            type="date"
                            id="checkInDate"
                            value={checkInDate}
                            onChange={(e) => setCheckInDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className='buttonbutton'>
                        <button type="submit" className="reset-button">Reset</button>
                        <button onClick={handleShareClick} type="submit" className="search-button">Search</button>
                    </div>

                </form>
            </div>

            <Site />
        </div>
        </>
    );
};

export default ReservationSearchForm;
