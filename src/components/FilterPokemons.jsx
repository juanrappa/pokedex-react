import React from "react";
import styled from "styled-components";

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

export const FilterPokemons = (props) => {
  const filter = props.filter;
  const setFilter = props.setFilter;

  return (
    <Input
      value={filter}
      onChange={(e) => {
        setFilter(e.target.value);
      }}
    />
  );
};
