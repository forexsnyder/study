import React, { useState, useEffect } from 'react'
import './CUDFlashcards.css'
import Layout from "../../Component/Shared/Layout"
import { Redirect } from 'react-router-dom'
import { createFlashcard } from "../../Services/flashcards"
import api from "../../Services/api-config"

function CUDFlashcards() {
  const [topics,updateTopics] = useState([])
  const [isCreated, setCreated] = useState(false)
  const [flashcard, setFlashcard] = useState({
    topic_id: null,
    front: '',
    back: ''
})


useEffect(()=>{
  const fetchTopic = async ()=> {
    const resp= await api.get('/topics')
    updateTopics(resp.data)
    console.log(resp.data)
  }
  fetchTopic()
},[])



const handleChange = (event) => {
  const { name, value } = event.target
  setFlashcard({
          ...flashcard,
          [name]: value
  })
}
const handleIDChange = (event) => {
  const { value } = event.target
  setFlashcard({
          ...flashcard,
          topic_id: value
  })
}

const handleSubmit = async (event) => {
  event.preventDefault()
  const created = await createFlashcard(flashcard)
  setCreated({ created })
}



if (isCreated) {
  
  return <Redirect to={`/cudflashcards`} />
}
  
  return (
      <Layout>
        <div>
      <h1>get ready to CUD flashcards</h1>
      </div>
     <div>
     <a>Create a new flashcard</a>
     </div>
    <div>

    <select onChange={handleIDChange} >
      {topics.map((topic) =>
        <option value={topic.id} >{topic.id}.{topic.name}</option>
                  )}
                  </select>
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
  );
}

export default CUDFlashcards;