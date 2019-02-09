import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Selectors from "./components/Selectors"
import Order from "./components/Order"

class App extends Component {
  constructor(){
    super()
    this.state = {
      orders:[],
    }
    this.handleOrderButton=this.handleOrderButton.bind(this)
    this.handleDeleteButton=this.handleDeleteButton.bind(this)
    this.handleEditButton=this.handleEditButton.bind(this)
  }
 
  componentDidMount(){
    Axios.get('/api/orders').then(res => {
      this.setState({
        orders:res.data
      })
    })
  }

  handleOrderButton = (newOrder) =>{
    let {colorInput, sizeInput, qtyInput} = newOrder[0]
    let addOrder = {color:colorInput, size:sizeInput, qty:qtyInput}
    console.log("adding order:", addOrder)
    Axios.post('/api/order',addOrder).then(res => {
      console.log("POST res data: ",res.data)
      this.setState({
        orders:res.data
      })
    })
  }
  handleDeleteButton(id){
    console.log("delete id:",id)
    Axios.delete(`/api/order/${id}`).then(res=>{
      this.setState({
        orders:res.data
      })
    })
  }
  handleEditButton(id,body){
    console.log("Edit id @ App: ",id)
    console.log("Edit Body @ App: ",body)
    Axios.put(`/api/order/${id}`,body).then(res=>{
      this.setState({
        orders:res.data
      })
    })
  }
  render() {
      console.log("Current State:",this.state)
    return (
      <div>
        <h1>DEEZ TEEZ</h1>

        <Selectors handleOrderButton={this.handleOrderButton}/>
        <Order orders={this.state.orders} handleDeleteButton={this.handleDeleteButton}
        handleEditButton={this.handleEditButton}/>
      </div>
    );
  }
}

export default App;
