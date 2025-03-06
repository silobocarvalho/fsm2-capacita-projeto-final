const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.use(express.json());

// Pokemon
// CRUD -> Criação, Leitura (Read), Update (atualizar) e Delete 

//Retorna todos os pokemons que estão cadastrados!
app.get('/pokemons', async (req, res) => {
    try {
        const pokemonsBd = await prisma.pokemons.findMany();
        res.json(pokemonsBd);
    } catch (err) {
        res.json({ error: 'Ocorreu um erro ao listar os pokemons', msg: err.message });
    }

    /** A segunda opção é retornar somente alguns atributos do Pokemon:
     * 1. Filtrando no banco de dados:
     const pokemonsBd = await prisma.pokemons.findMany({
            select: {
                id_pokemon: true,
                nome: true,
                preco: true,
                url_img: true
            }
        });
        res.json(pokemonsBd);

        2. Filtrando com Map
        const pokemonsBd = await prisma.pokemons.findMany();
        const pokemonsFiltrados = pokemonsBd.map(pokemon => ({
            id_pokemon: pokemon.id_pokemon,
            nome: pokemon.nome,
            preco: pokemon.preco,
            url_img: pokemon.url_img
        }));
        res.json(pokemonsFiltrados);
     * 
     */
});


app.post('/pokemons', async (req, res) => {
    const { nome, preco, estoque, tipo, raridade, url_img } = req.body;

    try {
        const novoPokemon = await prisma.pokemons.create({
            data: {
                nome, preco, estoque, tipo, raridade, url_img
            },
        });

        res.json(novoPokemon);
    } catch (err) {
        res.json({ error: 'Ocorreu um erro ao cadastrar o pokemon', msg: err.message });
    }
});


app.put('/pokemons/:idPokemon', async (req, res) => {
    
    const { idPokemon } = req.params
    const { nome, preco, estoque, tipo, raridade, url_img } = req.body;

    try {
        const pokemonAtualizado = await prisma.pokemons.update({
            where: { id_pokemon: idPokemon  },
            data: {
                nome, preco, estoque, tipo, raridade, url_img
            },
        });

        res.json(pokemonAtualizado);
    } catch (err) {
        res.json({ error: 'Ocorreu um erro ao atualizar o pokemon', msg: err.message });
    }
});


app.delete('/pokemons/:idPokemon', async (req, res) => {
    const { idPokemon } = req.params;
    try {
        const pokemonDeletado = await prisma.pokemons.delete({
            where: { id_pokemon: idPokemon },
        });

        res.json(pokemonDeletado);
    } catch (err) {
        res.json({ error: 'Ocorreu um erro ao deletar o pokemon', msg: err.message });
    }
});

app.get('/populate', async (req, res) => {
    try {
        const pokemonsBd = await prisma.pokemons.createMany({
            data: [
                {nome: 'Pikachu', preco: 300, estoque: 1, tipo: 'Eletrico', raridade: 'Comum', url_img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'},
                {nome: 'Squirtle', preco: 200, estoque: 2, tipo: 'Agua', raridade: 'Comum', url_img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
                {nome: 'Charmander', preco: 150, estoque: 3, tipo: 'Fogo', raridade: 'Comum', url_img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
                {nome: 'Bulbasaur', preco: 100, estoque: 4, tipo: 'Planta', raridade: 'Comum', url_img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
                {nome: 'Mewtwo', preco: 1000, estoque: 1, tipo: 'Psiquico', raridade: 'Raro', url_img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'},
                {nome: 'Mew', preco: 1000, estoque: 1, tipo: 'Psiquico', raridade: 'Raro', url_img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png'},
                {nome: 'Rayquaza', preco: 1000, estoque: 1, tipo: 'Fogo', raridade: 'Raro', url_img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png'},
                {nome: 'Groudon', preco: 1000, estoque: 1, tipo: 'Terra', raridade: 'Raro', url_img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png'},
                {nome: 'Kyogre', preco: 1000, estoque: 1, tipo: 'Agua', raridade: 'Raro', url_img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png'},
                {nome: 'Lugia', preco: 1000, estoque: 1, tipo: 'Ar', raridade: 'Raro', url_img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png'},
                {nome: 'Ho-Oh', preco: 1000, estoque: 1, tipo: 'Fogo', raridade: 'Raro', url_img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png'},
            ]
        });
        res.json(pokemonsBd);
    } catch (err) {
        res.json({ error: 'Ocorreu um erro ao cadastrar os pokemons', msg: err.message });
    }
});

app.get('/test', async (req, res) => {
    try {

        const pokemonsOrdenados = await prisma.pokemons.findMany({
            orderBy: {
                preco: 'asc',
            }
        });
        res.json(pokemonsOrdenados);
    } catch (err) {
        res.json({ error: 'Ocorreu um erro ao listar os pokemons', msg: err.message });
    }
});

const server = app.listen(port, () => {
    console.log(`Servidor executando em: http://localhost:${port}`);
});


// Exporta o app e o server para os testes
module.exports = { app, server };
