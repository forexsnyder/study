import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import {updateFlashcard, getFlashcard} from '../../Services/flashcards'
import Layout from "../../Component/Shared/Layout"


const UpdateFlashcard = (props) => {
    const [isUpdated, setUpdated] = useState(false)
    let { id } = useParams()
    const [flashcard, setFlashcard] = useState({
        front: '',
        back: ''
})

useEffect(() => {
    const fetchFlashcard = async () => {
        const data = await getFlashcard(id)
        setFlashcard(data)
        console.log(flashcard)
    }
    fetchFlashcard()
}, [id])

const handleChange = (event) => {
    const {  name, value } = event.target
    setFlashcard({
            ...flashcard,
            [name]: value
    })


  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(flashcard)
    const updated = await updateFlashcard(id,flashcard)
    setUpdated({ updated })
  }
  if (isUpdated) {
  
    return <Redirect to={`/`} />
  }
    return (
        <Layout>
     <div>
     <p>Update the Flashcard</p>
     </div>
    <div>

    <form className="create-form" onSubmit={handleSubmit}>

                <input
                    className="input-name"
                    placeholder='Front'
                    value={flashcard.front}
                    name='front'
                    onChange={handleChange}
                />
                 <textarea
                    className="textarea-back"
                    rows={10}
                    placeholder='Back'
                    value={flashcard.back}
                    name='back'
                    onChange={handleChange}
                />
                <button type='submit' className="submit-button">Submit</button>
            </form>
    </div>
      </Layout>
    )
}

export default UpdateFlashcard