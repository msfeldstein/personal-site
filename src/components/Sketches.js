import React from 'react'
import Project from './Project'
import Particles from '../assets/particles.png'
import styles from './Sketches.module.css'

export default function Sketches(props) {
    const projects = [
        {
            title: 'Particle Study',
            description: <div>
                <a href="https://msfeldstein.github.io/reglparticles/" target="_blank" rel="noopener noreferrer">Reglparticles</a> is a GPU based particle system for building composable particle system steps as fragment shaders to run on the gpu, letting you animate millions of particles in an efficient manner.

                <div className={styles.source}><a href="https://msfeldstein.github.io/reglparticles/" target="_blank" rel="noopener noreferrer">View</a> <a href="https://github.com/msfeldstein/reglparticles" target="_blank" rel="noopener noreferrer">Code</a></div>
            </div>,
            thumb: Particles
        },

        {
            title: 'ColorFlow',
            description: <div>
                ColorFlow is a projection installation built using connect and OpenFrameworks, designed for projecting from behind the viewer.
                <div className={styles.source}><a href="https://www.youtube.com/watch?v=2b-BR2GlDiw" target="_blank" rel="noopener noreferrer">View</a> <a href="https://github.com/msfeldstein/KinectColors" target="_blank" rel="noopener noreferrer">Code</a></div>
            </div>,
            video: 'colorflow.mp4'
        },

        {
            title: 'GooVR',
            description: <div>
                GooVR is a WebVR mesh manipulation prototype.  It may not work on modern browsers or devices.
            </div>,
            video: 'goovr.mp4'
        },

        {
            title: 'Portals',
            description: <div>
                Experimenting with portals in ThreeJS using stencils
                <div className={styles.source}><a href="https://msfeldstein.github.io/20-Portals/" target="_blank" rel="noopener noreferrer">View</a> <a href="https://github.com/msfeldstein/20-Portals" target="_blank" rel="noopener noreferrer">Code</a></div>
            </div>,
            video: 'portal.mp4'
        },
    ]
    return <div>
        {projects.map(p => Project(p))}
    </div>
}