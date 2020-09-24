import React from 'react';
import Layout from "../../Component/Shared/Layout"
import './Welcome.css'
import cards from '../../Resources/flashcards.jpg'
import { Link } from 'react-router-dom'
function Welcome() {
  // flashcard picture ref https://www.youtube.com/watch?v=xVcdlANWsl0
  
  return (
    <Layout>
        <div>
          <div className="welcome-title">
          <h1>Welcome to the welcome page</h1>
          </div>
          <div className="flashcard-title">
          <h2>Take your</h2>
          </div>
          <div className= "image-flashcard">
            <img src={cards}  alt="https://www.youtube.com/watch?v=xVcdlANWsl0"className="card"/>
          </div>
          <div className="flashcard-title">
          <h2>on the go!!!</h2>
          </div>
          
          <div className="flashcard-title" >
          <Link to="/landingpage">ENTER</Link>
          </div>
          
        </div>
    </Layout>
  );
}

export default Welcome;