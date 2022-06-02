import React from 'react';
import Goal from './Goal';
import './ListGoals.css';

function ListGoals(props) {
  console.log(props);
  return (
    <ul className='list-container'>
      {props.goals.map((goal, idx) => (
        <Goal id={goal.id} key={goal.id} remove={props.remove}>
          {goal.text}
        </Goal>
      ))}
    </ul>
  );
}

export default ListGoals;
