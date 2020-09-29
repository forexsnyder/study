import React, {useState}from 'react'
import { Link } from 'react-router-dom'
import {deleteFlashcard} from "../../Services/flashcards"
import "./Card.css"



const Card = (props) => {
    const [flip, setFlip] = useState(false)


    


    return (
        <div className="card-div">
            <div 
            className={`card ${flip ? 'flip':''}`}
            onClick={()=> setFlip(!flip)}
            >
                <div className="front">
                    {props.front}
                </div>
                <div className="back">
                    {props.back}
                </div>
            </div>
        

       
        <button className="edit-button"><Link className="edit-link" to={`/flashcards/${props.id}`}>Edit</Link></button>
            <button className="delete-button" onClick={() => deleteFlashcard(props.id)}>Delete</button>
        </div>
    )
}

export default Card