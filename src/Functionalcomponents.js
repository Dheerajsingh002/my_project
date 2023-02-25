import React from 'react';
import './Functinalcomponents.css';
function Functionalcomponents(props) {
  return (
    <div className="in">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  )
}
export default Functionalcomponents;

