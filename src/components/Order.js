import React, {Component} from 'react'
import DeleteButton from "./DeleteButton"

export default class Order extends Component{
    constructor(props){
        super(props)
        this.state={
            editing:false
        }
    }

    
    render(){
        console.log("props @ Order.js",this.props)
        let mappedOrders = this.props.orders.map((val) =>{
            let {id,color,size,qty,price} = val
            return(
                <div key={id}>
                    <h4>Color: {color}</h4>
                    <h4>Size: {size}</h4>
                    <h4>Quantity: {qty}</h4>
                    <h4>Price: ${price}</h4>
                    {/* <button onClick={()=>this.props.handleDeleteButton(1)}>try me</button> */}
                    <DeleteButton id={id} handleDeleteButton={this.props.handleDeleteButton}/>
                </div>
            )
            })    
        return(
            <div>
                <h3>YOORDER</h3>
                {mappedOrders}
            </div>
        );
        
    }
    
}