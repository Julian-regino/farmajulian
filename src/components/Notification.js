import React from 'react';

const Notification = ({ message, closeNotification }) => {
    return (
        <div className="notification">
            <p>{message}</p>
            <button onClick={closeNotification}>Cerrar</button>
        </div>
    );
};

export default Notification;