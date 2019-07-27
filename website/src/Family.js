import React from 'react'
import './Family.css'
export default function Family(props) {
    return (
        <div>
                 
            <h1 className="family-head">FAMILY DETAINS</h1>
            <div className="family-details">
                
                <h2>VOOTLA:{props.name}</h2>
                <h5>age:{props.age}</h5>
                <h5>Occupation:{props.occ}</h5>

            </div>
            
        </div>
                 
    )
}
