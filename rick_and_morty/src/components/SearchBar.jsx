import React, { useState } from "react";
import style from "../style/SearchBar.module.css"



export default function SearchBar({onSearch}) {
   
   const [searchInput, setSearchInput] = useState("");
   
   const changeHandler= (event)=> {
      setSearchInput(event.target.value);
   }

   return (
      <div className={style.content}>
         <div className={style.cbusca}>
      <input className={style.busca} type='text'
       placeholder="Busca tu personaje..." onChange={changeHandler} />
      
      <button className={style.boton} onClick={()=>
         onSearch(searchInput)}>Agregar</button> 
      
         </div>
      </div>
   );
}


