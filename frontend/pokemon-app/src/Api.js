import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // Substitua pela URL da sua API
});

// Busca todos os Pokémon
export const getPokemons = async () => {
    const response = await api.get('/pokemons');
    return response.data;
  };
  
  // Cria um novo Pokémon
  export const createPokemon = async (pokemon) => {
    const response = await api.post('/pokemons', pokemon);
    return response.data;
  };
  
  // Atualiza um Pokémon existente pelo ID
  export const updatePokemon = async (id, pokemon) => {
    const response = await api.put(`/pokemons/${id}`, pokemon);
    return response.data;
  };
  
  // Exclui um Pokémon pelo ID
  export const deletePokemon = async (id) => {
    const response = await api.delete(`/pokemons/${id}`);
    return response.data;
  };

//export const getCart = () => api.get('/carrinho');
//export const addToCart = (idPokemon) => api.post(`/carrinho/${idPokemon}`);
//export const removeFromCart = (idPokemon) => api.delete(`/carrinho/${idPokemon}`);
//export const checkout = () => api.post('/vendas');

export default api;