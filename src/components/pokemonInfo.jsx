import React from "react";
import styled from "styled-components";
const TitleInfo = styled.h3`
  text-align: center;
`;

export const PokemonInfo = (props) => {
  const base = props.pokemon;
  return (
    <div>
      <TitleInfo>{base.name}</TitleInfo>
    </div>
  );
};
