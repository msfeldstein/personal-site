import React from 'react'
import './Project.css'
export default function Project(props) {
    return <div key={props.title} className="Project">
        <div className="Project_title">{props.title}</div>
        <div className="Project_description">{props.description}</div>
    </div>
}