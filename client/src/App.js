import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Layout from './layouts/Layout';
import Login from './screens/Login';


function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const loginSubmit = () => {
    
  }

  return (
    <Layout>
      <Switch>

        <Route path='/login'>
          <Login />
        </Route>

        {/* <Route path='/register'>
          <SomeComponent />
        </Route>

        <Route path='/' component={foodsContainer} /> */}
      </Switch>
    </Layout>
  );
}

export default App;
