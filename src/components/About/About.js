import React from 'react';

import './about.css';

export const About = ({ bio,email,address,contactnumber }) => {
    return (
        <div className="about-container">
            <p>{bio}</p>
            <h4>Contact Details</h4>
            <p><b>Email:</b>  {email}</p>
            <p><b>Phone Number:</b>{contactnumber}</p>
            <p><b>Address:</b> {address}</p>
           
        </div>
    )
}