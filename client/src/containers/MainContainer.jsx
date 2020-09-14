import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { getAllFlavors } from '../services/flavors'
import { getAllFoods } from '../services/foods';
import Flavors from '../screens/Flavors';
import Foods from '../screens/Foods';

export default function MainContainer() {
  const [flavors, setFlavors] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFlavors = async () => {
      const flavorArray = await getAllFlavors();
      setFlavors(flavorArray);
    }
    const fetchFoods = async () => {
      const foodArray = await getAllFoods();
      setFoods(foodArray);
    }
    fetchFlavors();
    fetchFoods();
  }, [])


  return (
    <Switch>
      <Route path='/flavors'>
        <Flavors
          flavors={flavors}
        />
      </Route>
      <Route path='/foods'>
        <Foods
          foods={foods}
        />
      </Route>
    </Switch>
  )
}
