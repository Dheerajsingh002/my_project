import React, { Component } from 'react'

export default class classcomponent extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div>
        <h1>{this.props.tittle}</h1>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
