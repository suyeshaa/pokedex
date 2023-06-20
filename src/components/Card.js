import React, { useEffect, useState } from "react";
import axios from "axios";
import { Details } from "./Details";
import { Link } from "react-router-dom";

const Card = ({ poke }) => {
  // console.log(poke.name);
  const [pokeDeets, setPokeDeets] = useState([]);
  const fetchDetails = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
      .then((res) => {
        setPokeDeets(res);
        // console.log(poke.name, res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Link to={`/pokemonDetails/${poke.name}`}>
      <div className="border-2 flex-row flex my-10">
        <div>{poke.name}</div>

        {pokeDeets.data ? (
          <img src={pokeDeets.data.sprites.front_default} alt="pokemonImg" />
        ) : null}
      </div>
    </Link>
  );
};

export default Card;
