import React from 'react'
import Subtitle from './Subtitle.js'
import ColorChooser from './ColorChooser.js'

const App = props => {

    return (
    <>
        <h1>{props.title}</h1>
        <Subtitle subtitle={props.subtitle} underline={true}/>
        <ColorChooser />
    </>
    )
} 

export default App