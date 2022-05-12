import React, { Component } from "react";

class One extends Component
{
    constructor(props) {
      super(props)
    
      this.state = {
          count: 0
        }
        this.increamentbtn = this.increamentbtn.bind(this)
    }
    increamentbtn ()
    {
        this.setState({
            count: this.state.count + 1
         })
     }
    render ()
    {
        return (
            <>
                <h1>Count - { this.state.count }</h1>
                <button onClick={this.increamentbtn}>Click here</button>
            </>
        )
    }
}

export default One;