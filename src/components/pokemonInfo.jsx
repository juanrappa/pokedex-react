import React from "react";
import styled from "styled-components";

const TitleInfo = styled.h3`
  text-align: center;
`;

const PokemonInfo = (props) => {
  const base = props.selected.base;
  return (
    <div>
      <TitleInfo>{props.selected.name.english}</TitleInfo>
      <Table>
        {Object.keys(base).map((key) => {
          return (
            <tr>
              <Td>{key}</Td>
              <Td>{base[key]}</Td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
};
