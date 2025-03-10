import React, { useEffect, useState } from 'react';

import { getPokemons, deletePokemon } from './Api';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        fetchPokemons();
    }, []);
    const fetchPokemons = async () => {
        const response = await getPokemons();
        setPokemons(response.data);
    };
    /*
    const handleDelete = async (id) => {
        await deletePokemon(id);
        fetchPokemons();
    };
    */
   
    return (
        <div className="app">
            <h1>Lista de Pokémons</h1>
            <div className="pokemon-list">
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id_pokemon} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};
export default PokemonList;