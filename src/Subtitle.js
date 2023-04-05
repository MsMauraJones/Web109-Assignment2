import React from 'react'

const Subtitle = props => {

    const underlineStyle = {
        //text-decoration: underline
        textDecoration: "underline"
    }

    return (
    <>
        <div className="subtitle" style={props.underline ? underlineStyle : {}}>{props.subtitle}</div>
    </>
    )
} 

export default Subtitle