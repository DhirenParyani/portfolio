import React from 'react'

import './experiencecard.css';

export const ExperienceCard = ({ experience }) => {
    return (
        <div className="experience-card">
            <p><b>Company Name:</b> {experience.companyName}</p>
            <p><b>Role:</b> {experience.role}</p>
    <p><b>Responsibilitiess:</b> {experience.about.split("•").map(res=>{return <p>{res}</p>})} </p>
        </div>
    )
}