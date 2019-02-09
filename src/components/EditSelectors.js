import React, {Component} from 'react'


export default class EditSelectors extends Component{
    constructor(props){
        super(props)
        this.state={
            colorInput:``,
            sizeInput:``,
            qtyInput:``
        }
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
   render(){
       let {colorInput:color,sizeInput:size,qtyInput:qty} = this.state
        return(
            <div>
                <input placeholder="Edit Color" onChange={(e)=>this.handleColorInput(e.target.value)}
                value={this.state.colorInput}/><br/>
                <input placeholder="Edit Size" onChange={(e)=>this.handleSizeInput(e.target.value)}
                value={this.state.sizeInput}/><br/>
                <input placeholder="Edit Quantity" onChange={(e)=>this.handleQtyInput(e.target.value)}
                value={this.state.qtyInput}/><br/>

                <button onClick={()=>{
                    this.props.handleEditButton(this.props.id,{color,size,qty})
                    this.props.handleEditState()
                }}>Save</button>
            </div>
        )
    }
}