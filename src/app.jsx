import React, { useState } from "react";
import styled from "styled-components";
import { Pagination } from "./components/pagination.jsx";
import { useFetch } from "./hooks/fechData.js";
import { Pokemon } from "./components/pokemon.jsx";
const Title = styled.h1`
  text-align: center;
`;
const Container = styled.div`
  margin: auto;
  width: 800;
  padding-top: 1rem;
`;
const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;
const Page = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const App = () => {
  const fetch = useFetch();
  const [filter, setFilter] = useState("");
  return (
    <Container>
      <Title>pokedex</Title>
      <Input
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <Page>
        {fetch.data
          .filter((pokemon) => pokemon.name.toLowerCase().includes(filter))
          .map((pokemon) => (
            <Pokemon pokemon={pokemon} />
          ))}
        <Pagination next={fetch.next} previus={fetch.previus} />
      </Page>
    </Container>
  );
};

export default App;
