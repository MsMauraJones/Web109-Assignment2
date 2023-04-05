import React from 'react'
import { useState } from 'react' //import function from react is a hook

const ColorChooser = props => {

    //array distructuring assignment
    const[textColor, setTextColor] = useState('darkslateblue') //textColor variable will remember the color the user chooses

    const handleChooseColor = (event,color) => {
        setTextColor(color)
    }

    return (//inner bracket is an object?
    <div style={{color:textColor}}>
        <h2>Colour Chooser</h2>
        <p>Choose one of the following colours</p>
        <ul>
            <li><button onClick={(event)=>handleChooseColor(event,"teal")}>Teal</button></li>
            <li><button onClick={(event)=>handleChooseColor(event,"coral")}>Coral</button></li>
            <li><button onClick={(event)=>handleChooseColor(event,"darkmagenta")}>Purple</button></li>
            
        </ul>

    </div>
    )
} 

export default ColorChooser