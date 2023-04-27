

   export const infoUniquePokemon = (idPokemon,data)=>{
      const dataUniquePoquemon = data.filter(pokemon => pokemon.id === idPokemon)
      return dataUniquePoquemon
   }
