const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.use(express.json());

//Retorna todos os pokemons que estão cadastrados!
app.get('/pokemons', async (req, res) => {
    try {
        const pokemonsBd = await prisma.pokemons.findMany();
        res.json(pokemonsBd);
    } catch (err) {
        res.json({ error: 'Ocorreu um erro ao listar os pokemons', msg: err.message });
    }
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


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});