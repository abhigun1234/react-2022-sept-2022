import React, { Component } from 'react'

export default class Aboutus extends Component {
    constructor(props){
        super(props)
        this.state={name:'ajinkya',address:"pune"}
        console.log("props",props)
    }
    setData(_name,_address){

        this.setState({name:_name,address:_address})


    }
  render() {
    return (
      <div>Aboutus {this.props.data}
      <div className='info'>
         {this.state.name}
         <h1>address</h1>
         {this.state.address}
         <button onClick={()=>this.setData("aditya","delhi")}>setData</button>
      </div>
      </div>
    )
  }
}
