import React from 'react'
import './App.css'

export default function Name(props) {
    return (
        <div>
            <h1>{props.Name}</h1>
            <h2>{props.age}</h2>
        </div>
    )
}

