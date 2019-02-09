import React from 'react'
import EditSelectors from './EditSelectors';


export default function EditButton(props){

    return(
        <div>
            {console.log("Editing State @ Edit Button: ", props.editing)}
            {!props.editing?
            (<button onClick={()=>props.handleEditState()}>Edit Item</button>):
            <div>
            <EditSelectors id={props.id} handleEditButton={props.handleEditButton}
            handleEditState={props.handleEditState}/>              
            </div>
            }              
        </div>
    )

}