import React from 'react'

export default function OrderButton(props){
    
    return(
        <div>
            <button className="orderButton" onClick={()=>props.handleOrderButton()}>Order Now!</button>              
        </div>
    )
    
}