import React from 'react'

export default function DeleteButton(props){

    return(
        <div>
            <button onClick={()=>props.handleDeleteButton(props.id)}>Delete Item</button>              
        </div>
    )

}