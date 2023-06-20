import React from "react";
import { useParams } from "react-router-dom";

export const Details = ({ poke }) => {
  const params = useParams();
  // console.log(poke.pokemonName);
  console.log(params.pokemonName);
  return <div>{params.pokemonName}</div>;
};
