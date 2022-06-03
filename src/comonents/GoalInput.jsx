import React, { useState, useRef } from 'react';
import styles from './GoalInput.module.css';

function GoalInput(props) {
  const [text, setText] = useState();
  const inputRef = useRef();

  function setGoalHandler(ev) {
    setText({
      id: `${Math.floor(Math.random() * 1000000)}`,
      text: ev.target.value,
    });
  }

  function submitHandler(ev) {
    ev.preventDefault();
    if (text) {
      inputRef.current.value = '';
      return props.addGoal(text);
    }
  }

  return (
    <form className={styles['goal-form']} onSubmit={submitHandler}>
      <div className={styles['form-div']}>
        <label className={styles['form-label']}>Goals:</label>
        <input
          ref={inputRef}
          className={styles['form-input']}
          type="text"
          onChange={setGoalHandler}
        />
        <button className={styles['form-button']}>add goal</button>
      </div>
    </form>
  );
}

export default GoalInput;
