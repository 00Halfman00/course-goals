import React from 'react';
import Goal from './Goal';
import styles from './ListGoals.module.css';

function ListGoals(props) {
  console.log(props);
  return (
    <ul className={styles['list-container']}>
      {props.goals.map((goal, idx) => (
        <Goal id={goal.id} key={goal.id} remove={props.remove}>
          {goal.text}
        </Goal>
      ))}
    </ul>
  );
}

export default ListGoals;
