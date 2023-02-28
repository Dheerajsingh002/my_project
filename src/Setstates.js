import React, { Component } from 'react'

export default class setstates extends Component {
    constructor(){
        super();
        this.state={
            roll:1,
            name:"dheeraj"
        };
    }
    updameme = () =>{
        this.setState({
            roll:2,
            name:"dheeraj singh"
        });
    };
  render() {
    return (
      <div>
        <h1>{this.state.roll}</h1>
        <h1>{this.state.name}</h1>
        <button onClick={this.updameme}>updame me</button>
        
      </div>
    )
  }
}
