import React from 'react';
import Card from './Card';
import style from "../style/Cards.module.css"



export default function Cards(props) {
   return (
   <div className={style.content}>
       {
          props.characters.map((person, index)=> <Card
           key = {index}
          name={person.name}
           gender={person.gender} 
           species={person.species} 
           image={person.image} 
           id ={person.id}
           onClose={props.onClose}/>)
       }
   </div>
   );
}

