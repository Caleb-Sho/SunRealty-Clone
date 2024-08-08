// src/components/ReservationSearchForm.js

import React, { useState } from 'react';
import './PayWith.css';
import { IoIosArrowBack } from "react-icons/io";
import newMob from '../../Assets/NewMob.png';
import {Link} from 'react-router-dom'

function PayWith() {
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvcCode, setCvcCode] = useState('');
    const [error, setError] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleCardNumberChange = (e) => {
        const input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        if (input.length <= 16) {
            setCardNumber(input);
        }
    };

    const handleExpirationDateChange = (e) => {
        const input = e.target.value.replace(/[^0-9/]/g, ''); // Allow only numbers and '/'
        setExpirationDate(input);
    };

    const handleCvcCodeChange = (e) => {
        const input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        setCvcCode(input);
    };

    const saveDataToServer = async () => {
        const formData = {
            cardNumber,
            expirationDate,
            cvcCode
        };

        try {
            const response = await fetch('http://localhost:5000/api/save-data', { // Update the URL if your server is hosted elsewhere
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to save data');
            }

            const data = await response.json();
            console.log('Data saved successfully:', data);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        saveDataToServer(); // Save data when the checkbox is checked or unchecked
    };

    const handleSearch = (e) => {
        e.preventDefault();

        if (cardNumber.length < 16) {
            setError('Card number must be 16 digits.');
            return;
        }

        setError('');
        saveDataToServer(); // Save data when the Pay Now button is clicked
        console.log('Search with:', cardNumber, expirationDate, cvcCode);
    };

    return (
        <div className='wholeCntDivs'>
            <div className='tflexflex'>
                <IoIosArrowBack />
                <h6>New Card</h6>
            </div>
            <div className='imageForm'>
                <img src={newMob} alt="Mobile" />
                <form onSubmit={handleSearch}>
                    <input
                        type='text'
                        className='inputNot'
                        placeholder='Card Number'
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                    />
                    <input
                        type='text'
                        className='inputNot'
                        placeholder='Expiration Date (MM/YY)'
                        value={expirationDate}
                        onChange={handleExpirationDateChange}
                    />
                    <input
                        type='text'
                        className='inputNot'
                        placeholder='CVC Code'
                        value={cvcCode}
                        onChange={handleCvcCodeChange}
                    />

                    {error && <p className='error'>{error}</p>} {/* Display error message if any */}

                    <div className='theBotom'>
                        <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
                        <p>Save your card information, it's safe</p>
                    </div>

                    <Link to='/payment/search'><button type='submit'>Book Reservation</button> </Link> 
                </form>
            </div>
        </div>
    );
}

export default PayWith;
