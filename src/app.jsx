import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/navbar/home";
import Galery from "./components/navbar/galery";
import styled from "styled-components";
import pokedex from "./assets/pokebola.png";
const PrimaryNav = styled.nav`
  z-index: 14;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const MenuLink = styled(Link)`
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
`;
const Icon = styled.div`
  display: flex;
  height: auto;
  weigth: 100%;
`;
const Title = styled.h3`
  color: black;
`;
const App = () => {
  const padding = {
    padding: 5,
  };

  return (
    <Router>
      <>
        <PrimaryNav>
          <Icon>
            <img src={pokedex} alt="" />
          </Icon>
          <Menu>
            <MenuLink to="/" activeStyle>
              <Title>home</Title>
            </MenuLink>
          </Menu>
        </PrimaryNav>
      </>

      <Routes>
        <Route path="/galery" element={<Galery />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
