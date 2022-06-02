import React, { useState } from 'react';
import './GoalInput.css';

function GoalInput(props) {
  const [text, setText] = useState();

  function setGoalHandler(ev) {
    setText({
      id: `${Math.floor(Math.random() * 1000000)}`,
      text: ev.target.value,
    });
  }

  function submitHandler(ev) {
    ev.preventDefault();
    if (text) {
      return props.addGoal(text);
    }
  }

  return (
    <form className='goal-form' onSubmit={submitHandler}>
      <div className='form-div'>
        <label className='form-label'>Goals:</label>
        <input className='form-input' type="text" onChange={setGoalHandler} />
        <button className='form-button  '>add goal</button>
      </div>
    </form>
  );
}

export default GoalInput;
