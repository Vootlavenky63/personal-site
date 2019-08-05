import React from 'react'

export default function Funcmpnt() {
    function functionClick()
    {
        console.log("button clicked");
    }
    return (
        <div>
            <button onClick={functionClick}>Click</button>
        </div>
    )
}
