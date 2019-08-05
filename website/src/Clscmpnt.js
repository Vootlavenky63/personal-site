import React, { Component } from 'react'

export class Clscmpnt extends Component {
    classClick(){
        console.log("button clicked");
    }
    render() {
        return (
            <div>
                <button onClick={this.classClick}>click</button>
            </div>
        )
    }
}

export default Clscmpnt
