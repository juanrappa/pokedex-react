import React, { useContext } from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import { Pagination } from "../components/pagination";
import { FilterPokemons } from "../components/FilterPokemons";
import { PokemonContext } from "../hooks/ContextPokemon";
const Input = styled.input`
  width: 20%;
  font-size: large;
  padding: 0.2rem;
  border: none;
  border-bottom: 1px solid #6b7280;
  padding-top: 70px;
  outline: none;
  &:focus {
    border: none;
    border-bottom: 1px solid #6b7280;
    outline: none;
  }
`;

export const Galery = (props) => {
  const { filter, setFilter, fetch } = useContext(PokemonContext);
  return (
    <div>
      <div className="flex w-full justify-center">
        <FilterPokemons filter={filter} setFilter={setFilter} />
      </div>
      <div className="grid grid-cols-2 mt-10 gap-1 mx-auto max-w-screen-xl px-4 sm:grid-cols-3  ">
        {fetch.data
          .filter((pokemon) => pokemon.name.toLowerCase().includes(filter))
          .map((pokemon) => (
            <Card pokemon={pokemon} />
          ))}
      </div>
      <Pagination next={fetch.next} previus={fetch.previus} />
    </div>
  );
};
