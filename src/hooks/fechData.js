import React, { useEffect, useState } from "react";

export const useFetch = () =>{
    const [page,setPage] = useState(0)
    const [data,setData] = useState([])
    const URL = `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`

    const fetchApi = async (URL) =>{
      const response = await fetch(URL)
      const data = await response.json()
      return data.results
    }
    const getDataPokemons = async(pokemons)=>{
      const dataPokemons = await pokemons.map(async (pokemon)=>{
        const URL = pokemon.url
        const result = await fetch(URL)
        const data = await result.json()
        return data
      })
      const datap = Promise.all(dataPokemons).then(data => {
        return data;
      });
      return datap
    }
    const next = () =>{
      setPage(page + 20)
    }
    const previus = ()=>{
      if(page >= 20){
        setPage(page - 20)
      }
    }
    useEffect(()=>{
      (async()=>{
        const data = await fetchApi(URL)
        const pokemons = await getDataPokemons(data)
        setData(pokemons)
      })()
    },[page])
    
   return{
    data,
    previus,
    next
   }

}