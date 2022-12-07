import React, { useState, useEffect } from "react";
import style from "../style/Card.module.css"
import { Link } from "react-router-dom";
import {fav, unFav} from "../redux/actions.js"
import { connect } from "react-redux";

export function Card(props) {


   const [isFav, setIsFav] = useState(false);

   const handleFavorite= ()=>{
      if(isFav === true){
         setIsFav(false);
         props.unFav(props.id);
      }else {
         setIsFav(true);
         props.fav(props);
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.id]);

  

  
   return (
      <div>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         <div className={style.todoCard}>

         <img className={style.imgCard} 
         src={props.image} alt="Img"
         /> 
         <div className={style.titulos}>
         <Link className={style.link} to={`/detail/${props.id}`}>
            
         <h2 className={style.name}>{props.name}</h2>
         </Link>
         <h2 className={style.h2}>{props.gender}</h2>
         <h2 className={style.h2}>{props.species}</h2>
         </div>
         <button className={style.boton} onClick={()=>props.onClose(props.name)}>X</button>
         </div>
      </div>
   );
}

export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites,
   }
}

export function mapDispatchToProps(dispatch){
   return{
      fav: function(character){
        dispatch(fav(character))
      },
      unFav: function(id){
        dispatch(unFav(id))
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)