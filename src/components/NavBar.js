import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

export default function NavBar(props) {
    return <div className="NavBar">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        {/* <NavLink to="/sketches">Sketches</NavLink> */}
        <NavLink to="/resume">Resume</NavLink>
    </div>
}