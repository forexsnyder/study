import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { getAllFlavors } from '../services/flavors'
import { getAllFoods, putFood } from '../services/foods';
import Flavors from '../screens/Flavors';
import Foods from '../screens/Foods';
import FoodEdit from '../screens/FoodEdit';

export default function MainContainer() {
  const [flavors, setFlavors] = useState([]);
  const [foods, setFoods] = useState([]);
  const history = useHistory();

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

  const updateSubmit = async (id, formData) => {
    const updatedFood = await putFood(id, formData);
    setFoods(prevState => (prevState.map(food => food.id === Number(id) ? updatedFood : food)));
    history.push('/foods');
  }


  return (
    <Switch>
      <Route path='/foods/:id/edit'>
        <FoodEdit
          foods={foods}
          updateSubmit={updateSubmit}
        />
      </Route>
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
