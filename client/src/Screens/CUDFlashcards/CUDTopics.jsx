
import React, { useState } from 'react'
import './CUDFlashcards.css'
import Layout from "../../Component/Shared/Layout"
import { Link, Redirect } from 'react-router-dom'
import { createTopic } from "../../Services/topics"

function CUDTopics() {
  const [isCreated, setCreated] = useState(false)
  const [topic, setTopic] = useState({
    name: '',
})

const handleChange = (event) => {
  const { name, value } = event.target
  setTopic({
          ...topic,
          [name]: value
  })
}

  const handleSubmit = async (event) => {
    console.log(topic)
    event.preventDefault()
    const created = await createTopic(topic)
    setCreated({ created })
  }

  if (isCreated) {
      return <Redirect to={`/cudflashcards`} />
  }
  return (
      <Layout>
            <form className="create-form" onSubmit={handleSubmit}>
                <input
                    className="input-name"
                    placeholder='Name'
                    value={topic.name}
                    name='name'
                    onChange={handleChange}
                />
                <button type='submit' className="submit-button">Submit</button>
            </form>
     <Link to="/cudflashcards">Create Flashcards</Link>
      </Layout>
  );
}

export default CUDTopics;