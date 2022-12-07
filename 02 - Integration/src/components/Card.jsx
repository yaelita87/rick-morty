import React from "react";

export default function Card(props) {
   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <h2>Name: {props.name}</h2>
         <h2>Gender: {props.gender}</h2>
         <h2>Species: {props.species}</h2>
         <img  src="img/characterCard.png" alt="Image" /> 
      </div>
   );
}
