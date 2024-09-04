import React from 'react';
import classes from './modal.module.css';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={classes.modalOverlay}>
            <div className={classes.modal}>
                <button className={classes.closeButton} onClick={onClose}>
                    &times;
                </button>
                <div className={classes.modalContent}>
                    <h2>BOOKING CURRENTLY UNAVAILABLE</h2>
                    <p>Call / message <a href='tel:(206) 414-8973'>(206) 414-8973</a> to book your Reservation</p>
                    <p>We apologize for any inconveniences</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
