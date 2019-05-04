import React from 'react'

const ComingSoonStyle = {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
}

const ComingSoonImageStyle = {
    display: 'block'
}
export default function ComingSoon(props) {
    return <div style={ComingSoonStyle}>
        <img style={ComingSoonImageStyle} alt="Under Construction" src="/construction.gif" />
    </div>
}