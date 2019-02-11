import React, {Component} from 'react'
import OrderButton from './OrderButton'

export default class Selectors extends Component{
    constructor(props){
        super(props)
        this.state={
            colorInput:``,
            sizeInput:``,
            qtyInput:``
        }
        this.handleOrderButton=this.handleOrderButton.bind(this)
       }
       handleColorInput(val){
           this.setState({
               colorInput:val
           })
       }
       handleSizeInput(val){
           this.setState({
               sizeInput:val
           })
       }
       handleQtyInput(val){
           this.setState({
               qtyInput:val
           })
       }
       handleOrderButton(){
           let newOrder=[]
           newOrder.push(this.state)
        //    console.log("newOrder is @ selectors:",newOrder)
           this.props.handleOrderButton(newOrder)
           this.setState({
               colorInput:``,
               sizeInput:``,
               qtyInput:``
           })
       }
   render(){
        return(
            <div className="selectors">
                <input placeholder="Input a Color" onChange={(e)=>this.handleColorInput(e.target.value)}
                value={this.state.colorInput} className="sel-input"/><br/>
                <input placeholder="Input a Size" onChange={(e)=>this.handleSizeInput(e.target.value)}
                value={this.state.sizeInput} className="sel-input"/><br/>
                <input placeholder="Input a Quantity" onChange={(e)=>this.handleQtyInput(e.target.value)}
                value={this.state.qtyInput} className="sel-input"/><br/>
                <OrderButton handleOrderButton={this.handleOrderButton}/>            
            </div>
        )
    }
}