import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonInfo } from "./pages/pokemonInfo.jsx";
import { HeaderPokedex } from "./components/header.jsx";
import { Home } from "./pages/home.jsx";
import { Footer } from "./components/footer.jsx";
import { Galery } from "./pages/Galery.jsx";
import { useParams } from "react-router-dom";
import { useFetch } from "./hooks/fechData.js";
import { PokemonContext } from "./hooks/ContextPokemon.js";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 800;
  padding-top: 1rem;
`;

const App = () => {
  const fetch = useFetch();
  const params = useParams();
  const [filter, setFilter] = useState("");

  return (
    <PokemonContext.Provider
      value={{
        fetch,
        params,
        filter,
        setFilter,
      }}
    >
      <Container>
        <BrowserRouter>
          <HeaderPokedex />
          <Routes>
            <Route path="/pokedex-react/" element={<Home />} />
            <Route path="/pokedex-react/Galery" element={<Galery />} />
            <Route path="/pokedex-react/:id" element={<PokemonInfo />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Container>
    </PokemonContext.Provider>
  );
};

export default App;
