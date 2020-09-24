import React from 'react';
import './Layout.css'
import { NavLink } from "react-router-dom";

function Layout  (props) {

  
  return(
        <div className="layout">
            <div className="nav-bar">
            <NavLink className="linkb" to="/">
            <div className="link-style">
                HOME
                </div>
            </NavLink>
            <NavLink className="linkb" to="/landingpage">
            <div className="link-style">
                Sets of Flashcards
                </div>
            </NavLink>
            <NavLink className="linkb" to="/cudtopics">
                <div className="link-style">
                Create New Flashcard Set
                </div>
            </NavLink>
            <NavLink className="linkb" to="/comments">
                <div className="link-style">
                Comments
                </div>
            </NavLink>
            </div>
            <div className="layout-children">{props.children}</div>
        </div>
  );
}

export default Layout;