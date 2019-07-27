import React from 'react'

export default function Hero(props) {
    return (
        <div className="hero">
        
        <div className="sub-div-header">
            <h1>Hi!</h1>
            <h4  className="am-venkatesh-header"> I am {props.name}</h4>
            <h4 className="am-fullstackdev-header">I Am {props.position}</h4>
                
            <button className="download-resume-head">resume download</button> 
            </div>
           
          
                    
                
            
        </div>

    )
}
