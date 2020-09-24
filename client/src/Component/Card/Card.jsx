import React from 'react'
import { Link } from 'react-router-dom'
import {deleteFlashcard} from "../../Services/flashcards"



const Card = (props) => {
    


    


    return (
        <div>
            <h1>{props.id}</h1>
            <h1>{props.front}</h1>
            <h1>{props.back}</h1>
            <button className="edit-button"><Link className="edit-link" to={`/flashcards/${props.id}`}>Edit</Link></button>
            <button className="delete-button" onClick={() => deleteFlashcard(props.id)}>Delete</button>

        </div>

    )
}

export default Card