import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Layout from './layouts/Layout';
import Login from './screens/Login';
import { loginUser } from './services/auth';


function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
  }

  return (
    <Layout>
      <Switch>

        <Route path='/login'>
          <Login
            loginSubmit={loginSubmit}
          />
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
