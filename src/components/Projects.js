import React from 'react'
import Project from './Project'

export default function Projects(props) {
    const projects = [
        {
            title: 'Interactive Shader Format',
            description: <div>
                <a href="https://www.interactiveshaderformat.com/" target="_blank">interactiveshaderformat.com</a> is an open standard and online editor and gallery for interactive video and image effects, built with the good folks at <a href="https://vidvox.net" target="_blank">VidVox</a>.
            </div>,
        },
        {
            title: 'MacroMeez Visuals',
            description: <div>
                MacroMeez Visuals was a VJ app for performing audio-reactive displays using a Playstation controller.  It was created for burning man and used at various bay area parties, and by VJs all over the country.
            </div>,
        },
        {
            title: 'dat-mirror',
            description: <div>
                <a href="https://github.com/msfeldstein/dat-mirror" target="_blank">dat-mirror</a> is a small utility for mirroring p2p <a href="https://datproject.org/" target="_blank">dat</a> sites from a raspberry pi, as well as mirroring to http for regular browsers.  This site is hosted using dat-mirror.
            </div>,
        },
        {
            title: 'Chrome Media Keys',
            description: <div>
                <a href="https://github.com/msfeldstein/chrome-media-keys" target="_blank">Chrome Media Keys</a> was a Chrome extension to add hardware media key support to dozens of online music players.  Chrome recently shipped native media key support so this extension is no longer being actively maintained, but still available until a majority of sites implement their own media keys.
            </div>,
        }
    ]
    return <div>
        {projects.map(p => Project(p))}
    </div>
}