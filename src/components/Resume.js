import React from 'react'

const linkStyle = {
    color: "#DCDCDC",
    margin: "auto",
    display: "block",
    textAlign: "center",
    marginTop: "52px"
}

export default function Projects(props) {
    return <div>
        <a
            style={linkStyle}
            href="/Feldstein%20Resume.pdf">
            Feldstein Resume.pdf
        </a>
    </div>
}