import {IndexedPokemon} from "../interfaces/pokemon.interface";

interface PokemonCardProps{
    pokemon:IndexedPokemon;
}

const PokemonCard=({pokemon}:PokemonCardProps)=>{
    return <card>{pokemon.name}</card>
    
};

export default PokemonCard;