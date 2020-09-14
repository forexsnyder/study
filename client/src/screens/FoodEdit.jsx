import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function FoodEdit(props) {
  const [formData, setFormData] = useState({
    name: ""
  })
  const { name } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefilForm = () => {
      const singleFood = props.foods.find(food => {
        return food.id === Number(id)
      })
      setFormData({ name: singleFood.name })
    }
    if (props.foods.length) {
      prefilForm();
    }
  }, [props.foods])

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ name: value });
  }

  return (
    <form>
      <input
        type='text'
        value={name}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}
