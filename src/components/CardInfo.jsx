import React from "react";

export const CardInfo = (props) => {
  const pokemon = props.pokemon;
  return (
    <div className="flex w-full justify-center">
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
          <p class="text-gray-700 text-base">
            <strong class="font-bold text-lg text-black">types: </strong>
            {pokemon.types.map((type) => type.type.name).join(",")}
          </p>
          <p class="text-gray-700 text-base">
            <strong class="font-bold text-lg text-black">abilities: </strong>
            {pokemon.abilities.map((type) => type.ability.name).join(",")}
          </p>
        </div>
      </div>
    </div>
  );
};
