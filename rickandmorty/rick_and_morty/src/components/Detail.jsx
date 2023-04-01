import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Detail( ) {
  const { id } = useParams();
  const [character, setCharacter] = React.useState({});
  React.useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
  }, [id]);
  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>STATUS | {character.status}</p>
      <p>SPECIE |{character.species}</p>
      <p>GENDER |{character.gender}</p>
    </div>
  );
}
