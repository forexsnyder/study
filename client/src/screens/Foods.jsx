import React from 'react';
import { Link } from 'react-router-dom';

export default function Foods(props) {
  return (
    <div>
      <h3>Foods</h3>
      {props.foods.map(food => (
        <React.Fragment key={food.id}>
          <Link to={`/foods/${food.id}`}><p>{food.name}</p></Link>
          <Link to={`/foods/${food.id}/edit`}><button>Edit</button></Link>
          <button>Delete</button>
        </React.Fragment>
      ))}
    </div>
  )
}
