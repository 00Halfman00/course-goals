import React, { useState } from 'react';
import './App.css';
import ListGoals from './comonents/ListGoals';
import GoalInput from './comonents/GoalInput';

function App() {
  const [goals, setGoals] = useState([
    { id: '1a', text: 'order pizza' },
    { id: '2c', text: 'order sausage pizza' },
    { id: '3d', text: 'order sausage, mushroom pizza' },
    { id: '4e', text: 'order sausage, mushroom, jalapeño pizza' },
  ]);
  const noGoals = (
    <h3 style={{ textAllign: 'center' }}>Plan ahead! Stop being lazy...</h3>
  );

  function addGoalHandler(goal) {
    const tmp = [];
    let flag = false;
    for(let idx = 0; idx < goals.length; ++idx){
      if(goals[idx].id === goal.id || goals[idx].text === goal.text) flag = true;
      tmp[tmp.length] = goals[idx];
    }
    if(!flag) tmp[tmp.length] = goal;
    setGoals(tmp);
    /*
    setGoals((prevGoals) => {
      const current = [...prevGoals, goal];
      console.log(current);
      return current;
    });
    */
  }
  function removeHandler(id) {
    let tmp = [];
    for (let idx = 0; idx < goals.length; ++idx) {
      if (goals[idx].id !== id) {
        tmp[tmp.length] = goals[idx];
      }
    }
    setGoals(tmp);
  }

  const content = goals[0] ? (
    <ListGoals goals={goals} remove={removeHandler} />
  ) : (
    noGoals
  );

  return (
    <div className="App">
      <GoalInput addGoal={addGoalHandler} />
      {content}
    </div>
  );
}

export default App;
