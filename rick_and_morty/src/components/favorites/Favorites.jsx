import React from "react";
import { connect, useDispatch } from "react-redux";
import  Card  from "../Card";
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = (props) => {

    const dispatch = useDispatch();
    
    function handleClick(e) {
        const { name, value } = e.target;
        if (name === "order") dispatch(orderCards(value));
        if (name === "gender") dispatch(filterCards(value));
    }
    
    return(
       <div>
           <select name="order" onClick={handleClick}>
           <option value="" disabled>Ordenar</option>
           <option value="ascendente">Ascendente</option>
           <option value="descendente">Descendente</option>
           </select>
           <select name="gender" onClick={handleClick}>
           <option value="" disabled>
                        Filtrar...
                    </option>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknow</option>
           </select>
        <div>
        {
           props.myFavorites && props.myFavorites?.map((person, index)=> <Card
            key = {index}
            name={person.name}
            gender={person.gender} 
            species={person.species} 
            image={person.image} 
            id ={person.id}

            />)
        }
        </div>
        </div>
    )
}

export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }
}



export default connect(mapStateToProps,null)(Favorites)