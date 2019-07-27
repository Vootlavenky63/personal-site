import React from 'react'

export default function Likes(props) {
    return (
        <div className="table">
        <div className="likes">
            <h4>likes:{props.likes}</h4>
            <h4>comments:{props.comments}</h4>
        </div>
        </div>
    )
}
