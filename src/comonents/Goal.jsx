import React from 'react';

const Goal = (props) => {

  function removeHandler(){
    props.remove(props.id)
  }

  return (
    <li onClick={removeHandler}>
      {props.children}
    </li>
  )
}

export default Goal;
