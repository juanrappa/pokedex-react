import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/fechData.js";
import { infoUniquePokemon } from "../hooks/infoUniquePokemon.js";
const TitleInfo = styled.h3`
  text-align: center;
`;

export const PokemonInfo = (props) => {
  const pokemons = useFetch();
  const params = useParams();
  const pokemon = params.id;
  const data = pokemons.data;

  data.map((poke) => {
    console.log(poke.id);
    console.log(pokemon);
  });
  return (
    <div>
      <TitleInfo>hola</TitleInfo>
    </div>
  );
};
