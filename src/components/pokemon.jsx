import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
const Card = styled.div`
  display: flex;
`;

export const Pokemon = (props) => {
  const pokemon = props.pokemon;
  return (
    <Link to={`/pokedex-react/${pokemon.id}`}>
      <Card>
        <img src={pokemon.sprites.front_default} alt="" />
        <h3>{pokemon.name}</h3>
      </Card>
    </Link>
  );
};
