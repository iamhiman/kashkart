import React from 'react'

export default function FormSuccess(props) {
    return (
        <div className="form-container" style={{ textAlign: "center" }}>
            <h1> Hello {props.name}, Form Submitted Successfully.</h1>
        </div>
    )
}
