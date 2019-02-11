import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Selectors from "./components/Selectors"
import Order from "./components/Order"
import image from "./images/blackT.jpg"

class App extends Component {
  constructor(){
    super()
    this.state = {
      orders:[],
      total:0
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
      let total = 0
      this.state.orders.forEach((val)=> total += val.price)
      console.log("Total Price @ app: ",total)
      
    })
  }

  handleOrderButton = (newOrder) =>{
    let {colorInput, sizeInput, qtyInput} = newOrder[0]
    let addOrder = {color:colorInput, size:sizeInput, qty:qtyInput}
    // console.log("adding order:", addOrder)
    Axios.post('/api/order',addOrder).then(res => {
      // console.log("POST res data: ",res.data)
      this.setState({
        orders:res.data
      })
      let total = 0
      this.state.orders.forEach((val)=> total += val.price)
      // console.log("total price @ ordering: ",total)
      this.setState({
        total
      })
    })
  }
  handleDeleteButton(id){
    // console.log("delete id:",id)
    Axios.delete(`/api/order/${id}`).then(res=>{
      this.setState({
        orders:res.data
      })
      let total = 0
      this.state.orders.forEach((val)=> total += val.price)
      // console.log("total price @ deleting: ",total)
      this.setState({
        total
      })
    })
  }
  handleEditButton(id,body){
    // console.log("Edit id @ App: ",id)
    // console.log("Edit Body @ App: ",body)
    Axios.put(`/api/order/${id}`,body).then(res=>{
      this.setState({
        orders:res.data
      })
      let total = 0
      this.state.orders.forEach((val)=> total += val.price)
      // console.log("total price @ editing: ",total)
      this.setState({
        total
      })

    })
  }
  render() {
      console.log("Current State:",this.state)
      let {total} = this.state
    return (
      <div className="App">
        <h1 id="Logo">DEEZ TEEZ</h1>
        <div className="midpage">
          <img src={image} alt="black t shirt" className="shirtImg"/>
            <div className="selectors-and-slogo">
              <p className="slogo">Order your FAVORITE T-Shirts here!</p>
              <Selectors handleOrderButton={this.handleOrderButton}/>
            </div>
        </div>  
        <h3 id="orderTitle">- YOUR ORDER -</h3>
        <h4 id="total">TOTAL: ${total}</h4>
          <div className="Orders">
            <Order orders={this.state.orders} handleDeleteButton={this.handleDeleteButton}
            handleEditButton={this.handleEditButton}/>
          </div>
      </div>
    );
  }
}

export default App;
