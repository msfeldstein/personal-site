import React from 'react'
import './Project.css'
export default function Project(props) {
    const img = props.thumb ? <img className="Project_thumb" src={props.thumb} /> : null
    return <div key={props.title} className="Project">
        <div className="Project_title">{props.title}</div>
        <div className="Project_description">{props.description}</div>
        {img}
    </div>
}