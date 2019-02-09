import React, {Component} from 'react'
import DeleteButton from "./DeleteButton"
import EditButton from './EditButton';

export default class Order extends Component{
    constructor(props){
        super(props)
        this.state={
            editing:false
        }
        this.handleEditState=this.handleEditState.bind(this)
    }
    handleEditState(){
        let {editing} = this.state
        // let currentState = editing
        console.log("Editing State @ Order: ",editing)
        this.setState({
            editing:!editing
        })
    }
    
    render(){
        // console.log("props @ Order.js",this.props)
        let mappedOrders = this.props.orders.map((val) =>{
            let {id,color,size,qty,price} = val
        let {editing} = this.state
            return(
                <div key={id}>
                    <h4>Color: {color}</h4>
                    <h4>Size: {size}</h4>
                    <h4>Quantity: {qty}</h4>
                    <h4>Price: ${price}</h4>
                    {/* <button onClick={()=>this.handleEditState()}>try me</button> */}
                    <EditButton id ={id} handleEditButton={this.props.handleEditButton}
                    handleEditState={this.handleEditState} editing={editing}/>
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