import React from 'react'
import './Project.css'
export default function Project(props) {
    const img = props.thumb ? <img className="Project_thumb" src={props.thumb} alt={props.thumb}/> : null
    const video = props.video ? <video className="Project_thumb" src={props.video} playsInline muted loop autoPlay/> : null
    return <div key={props.title} className="Project">
        <div className="Project_info">
            <div className="Project_title">{props.title}</div>
            <div className="Project_description">{props.description}</div>
        </div>
        {img}
        {video}
    </div>
}