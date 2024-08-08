// src/components/ReservationSearchForm.js
import React, { useState } from 'react';
import './PayWith.css';
// import Site from '../../../src/components/SiteFooter/SiteFooter'
import { IoIosArrowBack } from "react-icons/io";
import mobileImg from '../../Assets/c cardMob2.png'
import newMob from '../../Assets/NewMob.png'
import DeskImg from '../../Assets/C Card.png'

function PayWith() {
    const [confirmationNumber, setConfirmationNumber] = useState('');
    const [checkInDate, setCheckInDate] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Handle search logic
        console.log('Search with:', confirmationNumber, checkInDate);
    };

    return (

        
        <div className='wholeCntDivs'>
            <div className='tflexflex'>
                <IoIosArrowBack />
                <h6>New Card</h6>
            </div>
            <div className='imageForm'>
                <img src={newMob} />
                <form>
                    <input type='number' className='inputNot' placeholder='Card Number' />

                    <input type='number' className='inputNot' placeholder='Expiration Date' />

                    <input type='number' className='inputNot' placeholder='CVC Code' />

                    <div className='theBotom'>
                        <input type='checkbox' />
                        <p>Save your card information, it's safe</p>
                    </div>

                    <button>Pay Now</button>
                </form>
            </div>
        </div>
        
    );
};

export default PayWith;
