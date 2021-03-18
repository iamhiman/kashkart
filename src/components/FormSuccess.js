import React from 'react'

export default function FormSuccess(props) {
    return (
        <div className="form-container" style={{ textAlign: "center" }}>
            <h1> Hello {props.name}, We've received your request.</h1>
        </div>
    )
}
