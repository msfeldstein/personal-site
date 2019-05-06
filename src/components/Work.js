import React from 'react'

const palmStyle = {
    color: "#FD8823"
}

const androidStyle = {
    color: "#78C257"
}

const canopyStyle = {
    color: "#23DEBF"
}

const eyegrooveStyle = {
    color: "#ED2472"
}

const facebookStyle = {
    color: "#3B579D"
}

const framerStyle = {
    background: "-webkit-linear-gradient(#26D4FD, #1996FC)",
    "WebkitBackgroundClip": "text",
    "WebkitTextFillColor": "transparent"
}

export default function About(props) {
    return <div>
        <p>
            I started my career at Palm working on the Palm Pre and <a href="https://en.wikipedia.org/wiki/WebOS" style={palmStyle}>WebOS</a>, an operating system slightly ahead of its time. I worked on the core apps, including Maps, Contacts, and Messaging.
        </p>

        <p>
            After shipping the Pre, I moved on to <span style={{color: "#4285f4"}}>G</span><span style={{color: "#ea4335"}}>o</span><span style={{color: "#fbbc05"}}>o</span><span style={{color: "#4285f4"}}>g</span><span style={{color: "#34a853"}}>l</span><span style={{color: "#ea4335"}}>e</span>, where I got to work on Chrome for Mac, spin up the front-end of Chrome for Android, and join the <span style={androidStyle}>Android Design Team</span>, building tools, prototypes, and implementations for phone and tablet System UI, Android Wear, Android TV, and Google Now.
        </p>

        <p>
            Joining forces with some legendary folks from the Android Design Team, we started <a href="https://canopy.co" style={canopyStyle}>Canopy</a>, a design focused curated storefront built on top of Amazon.
        </p>

        <p>
            Meanwhile, I did some freelance work at Uber, helping to bring prototyping into their process.  Before we had Framer Studio I built <span style={framerStyle}>AirFrame</span>,, a bespoke app for Uber designers and developers to get access to phone mirroring, live-reload, modules, and other features needed to make prototyping a first class discipline.
        </p>

        <p>
            Building on to my love of creativity and visual arts, I joined <span style={eyegrooveStyle}>Eyegroove</span>, a startup full of artists trying to bring audio-visual expressivity to a wider audience.  We were acquired by <span style={facebookStyle}>Facebook</span> in 2016 where we integrated our shader and interactivity frameworks with Spark AR Studio for the Camera Platform.
            </p>

        <p>
            In 2017 I moved to the SocialVR team where I prototyped and implemented 3d Posts and 3d Photos to try to bring the Facebook App and the immersive reality our team was working on a bit closer together.  Currently I’m working on VR experiences which I can hopefully speak about soon!</p>
    </div>
}