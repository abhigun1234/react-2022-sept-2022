import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor(){
        super()
        this.state={counter:0}
    }
    incrementCounter(){
        this.setState({counter:this.state.counter+1})
    }
  render() {
    return (
      <div>
        {this.state.counter}
      <button onClick={()=>this.incrementCounter()}>click</button>
      </div>
    )
  }
}
