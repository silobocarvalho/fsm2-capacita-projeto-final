import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // Substitua pela URL da sua API
});

export const getPokemons = () => api.get('/pokemons');
export const createPokemon = (pokemon) => api.post('/pokemons', pokemon);
export const updatePokemon = (id, pokemon) => api.put(`/pokemons/${id}`, pokemon);
export const deletePokemon = (id) => api.delete(`/pokemons/${id}`);

//export const getCart = () => api.get('/carrinho');
//export const addToCart = (idPokemon) => api.post(`/carrinho/${idPokemon}`);
//export const removeFromCart = (idPokemon) => api.delete(`/carrinho/${idPokemon}`);
//export const checkout = () => api.post('/vendas');

export default api;