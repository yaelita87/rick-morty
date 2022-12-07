
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import style from "../style/Detail.module.css"

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
    origin: {},
    location: {},
    image: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }, [id]);

  return character === undefined ? (
  
    <h1>CARGANDO</h1>
  ) : (
    <div className={style.padre}>
      <div className={style.grande}>
        <button className={style.boton}
          onClick={() => {
            navigate("/");
          }}
        >
          VOLVER
        </button>
      <div className={style.contInfo}>
      <h2 className={style.nombre}>Name:{character.name}</h2>
      <h5>Status:{character.status}</h5>
      <h5>Specie:{character.species}</h5>
      <h5>Gender:{character.gender}</h5>
      <h5>Origin:{character.origin.name}</h5>
      </div>
      <div>
        <img className={style.img} src={character.image} alt="" />
      </div>
      
    </div>
    </div>
  );
}