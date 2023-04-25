import styled from "styled-components";
import React from "react";

const Card = styled.div`
  display: flex;
`;

export const Pokemon = (props) => {
  const pokemon = props.pokemon;
  return (
    <Card>
      <img src={pokemon.sprites.front_default} alt="" />
      <h3>{pokemon.name}</h3>
    </Card>
  );
};
