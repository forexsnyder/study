import React, { useState, useEffect } from 'react'
import './Flashcard.css'
import Layout from '../../Component/Shared/Layout'
import { useParams } from 'react-router-dom'
import api from '../../Services/api-config'
import Card from '../../Component/Card/Card'

const Flashcard = (props) => {

    const [flashcard, setFlashcard] = useState([])
    const [isLoaded, setLoaded] = useState(false)
    const { id } = useParams()
    const [flip, setFlip]= useState(false)
    

    useEffect(() => {
        const fetchFlashcard = async () => {
            const result = await api.get(`/topics/${id}`)
            setFlashcard(result.data.flashcards)
            console.log(flashcard)
             setLoaded(true)

        }
        fetchFlashcard()

    }, [id])
    
    const cardJSX = flashcard.map((card, index) =>
    <Card id={card.id} front={card.front} back={card.back} key={index} />
    )

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    return (
        <Layout>
            <div onClick={()=> setFlip(!flip)}>
                {flip }
                {cardJSX}
            </div>
            <div className="button-container">
            
            
            </div>
        </Layout>
    )
}

export default Flashcard