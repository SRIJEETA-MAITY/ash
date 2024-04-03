export interface IndexedPokemon{
    name:string
    url:string

}

export interface PokemonListRespomse{
    count:number;
    next:string;
    previous:string|null;
    results:IndexedPokemon[];


}