import {useState} from "react";
import {POKEMON_API_POKEMON_URL}from"../constants";
import {IndexedPokemon} from "../interfaces/pokemon.interface";




const usePokemons=()=>{
    const[pokemons,setPokemons]=useState<IndexedPkemon[]>([])
    const [nextUrl,setNextUrl]=useState<string|null>
    (POKEMON_API_POKEMON_URL)

    useEffect(()=>{
        fetchPokemon()

    },[])



    const fetchPokemon=async()=>{
        if(nextUrl){
            const result=await httpclient.get<PokemonListResponse>(nextUrl)
            if(result?.data?.results){
                setPokemons(result.data.results)


            }
            console.log(result)
        }

    }

    return{
        pokemons
    }
    
}

export default usePokemons;