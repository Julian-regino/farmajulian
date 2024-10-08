import React from 'react';

const Notification = ({ message, closeNotification }) => {
    return (
        <div className="notification"></div>
        <p>{message}</p>
        <button onClick={closeNotification}>Cerrar</button>
    </div>
);
};

export default Notification;