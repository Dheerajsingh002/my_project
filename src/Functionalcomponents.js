import React from 'react';
import './Functinalcomponents.css';
function Functionalcomponents(props) {
  return (
    <div className="in">
      
      <p>
      <h1>{props.title}</h1>
      {props.content}
      </p>
    </div>
  )
}
export default Functionalcomponents;

