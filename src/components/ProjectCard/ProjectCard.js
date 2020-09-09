import React from 'react'

import './projectcard.css';

export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <p><b>{project.name}</b></p>
            <p><b>Description:</b> {project.description}</p>
           
            <p>{(project.link!=null)?project.link.trim().split(";").map(link=>{return <p><b>Link:</b><a href={link}>{link}</a></p>}):""}</p>
        </div>
    )
}