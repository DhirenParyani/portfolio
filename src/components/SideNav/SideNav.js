import React from 'react';
import displayPicture from "./../../images/Resume_400x400.png"
import './SideNav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src={displayPicture}
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Dhiren Paryani</h2>
            <p className="subtitle">“Make it work, make it right, make it fast.” – Kent Beck</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
                <p className="section-list-element" onClick={() => handleSectionClick("experiences")}>Experiences</p>

            </div>
        </div>
    );
};