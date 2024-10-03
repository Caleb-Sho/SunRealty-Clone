import React from "react";
import classes from "./modal.module.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleShareRequest = () => {
    const email = "sunrealtysupportteam@outlook.com";
    const subject = "Booking Issue";
    const body = `Hi,\n\nI am having issues with my booking reservation`; // Added newline characters
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink; // Redirect to the mail client
  };

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modal}>
        <button className={classes.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={classes.modalContent}>
          <h2>BOOKING CURRENTLY UNAVAILABLE</h2>
          <p>
            Call / message <a href="tel:(206) 414-8973">(206) 414-8973</a> to
            book your Reservation
          </p>
          <p>We apologize for any inconveniences</p>
          <button className={classes.shareButton} onClick={handleShareRequest}>
            Share Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// import React from 'react';
// import classes from './modal.module.css';

// const Modal = ({ isOpen, onClose }) => {
//     if (!isOpen) return null;

//     return (
//         <div className={classes.modalOverlay}>
//             <div className={classes.modal}>
//                 <button className={classes.closeButton} onClick={onClose}>
//                     &times;
//                 </button>
//                 <div className={classes.modalContent}>
//                     <h2>BOOKING CURRENTLY UNAVAILABLE</h2>
//                     <p>Call / message <a href='tel:(206) 414-8973'>(206) 414-8973</a> to book your Reservation</p>
//                     <p>We apologize for any inconveniences</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Modal;
