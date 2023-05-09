import React, { useContext } from "react";
import { CardInfo } from "../components/CardInfo.jsx";
import { PokemonContext } from "../hooks/ContextPokemon.js";

export const PokemonInfo = () => {
  const { params, fetch } = useContext(PokemonContext);
  const id = Number(params.id);
  const data = fetch.data;

  return (
    <>
      {data
        .filter((pokemon) => pokemon.id === id)
        .map((pokemon) => {
          return <CardInfo pokemon={pokemon} />;
        })}
    </>
  );
};
