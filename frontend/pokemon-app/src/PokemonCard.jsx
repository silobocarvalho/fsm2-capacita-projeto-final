import React from 'react';

const PokemonCard = ({ pokemon }) => {
 return (
<div className="pokemon-card">
   <img src={pokemon.url_img} alt={pokemon.nome} className="pokemon-image" />
   <div className="pokemon-info">
    <h3>{pokemon.nome}</h3>
    <p><strong>ID:</strong> {pokemon.id_pokemon}</p>
    <p><strong>Tipo:</strong> {pokemon.tipo}</p>
    <p><strong>Preço:</strong> R${pokemon.preco.toFixed(2)}</p>
    <p><strong>Estoque:</strong> {pokemon.estoque}</p>
    <p><strong>Raridade:</strong> {pokemon.raridade}</p>
    <p><strong>Fraquezas:</strong> {pokemon.fraquezas == "" ? "Sem fraquezas conhecidas." : pokemon.fraquezas }</p>

   </div>
  </div>
 );
};
export default PokemonCard;