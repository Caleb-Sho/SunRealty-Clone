// src/components/Notification/Notification.js

import React from 'react';
import './NotificationShow.css';
import { IoClose } from "react-icons/io5";

const Notification = ({ message, onClose }) => {
  return (
    <div className="notification">
      <p>{message}</p>
      <button onClick={onClose}><IoClose /></button>
    </div>
  );
};

export default Notification;
