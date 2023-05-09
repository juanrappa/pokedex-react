import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  const pokemon = props.pokemon;
  return (
    <div
      id="card"
      data-cy="card"
      data-name="${pokemonData.name}"
      class="max-w-xs rounded overflow-hidden shadow-lg"
    >
      <img
        class="w-full"
        src={pokemon.sprites.front_default}
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4 flex items-center flex-col">
        <div class="font-bold text-xl mb-2">{pokemon.name}</div>
        <Link
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          to={`/pokedex-react/${pokemon.id}`}
        >
          More info
        </Link>
      </div>
    </div>
  );
};
