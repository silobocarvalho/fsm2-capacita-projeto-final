/*

1. Precisa instalar: npm install --save-dev jest supertest
2. Vamos criar um arquivo chamado server.test.js para escrever nossos testes.

3. Add no package.json
"scripts": {
  "test": "jest"
}

4. npm test // Para rodar os testes

5. Necessário alterar o index.js para evitar erro de conexões abertas: 
// Exporta o app e o server para os testes
module.exports = { app, server };

*/

const request = require('supertest');
const {app, server} = require('./index.js'); // Substitua pelo caminho correto do seu arquivo do servidor


afterAll(async () => {
    //await prisma.$disconnect(); // Fecha a conexão com o banco de dados
    server.close(); // Encerra o servidor Express
});

describe('Testes das rotas de Pokémons', () => {
    let pokemonId;

    // Teste para a rota POST /pokemons
    it('Deve criar um novo Pokémon', async () => {
        const response = await request(app)
            .post('/pokemons')
            .send({
                nome: 'PikachuTest',
                preco: 300,
                estoque: 1,
                tipo: 'Eletrico',
                raridade: 'Comum',
                url_img: 'https://example.com/pikachu.png'
            });

        expect(response.status).toBe(201); // 201 representando que o objeto foi criado no servidor.
        expect(response.body).toHaveProperty('id_pokemon');
        pokemonId = response.body.id_pokemon; // Salva o ID para usar nos próximos testes
    });

    // Teste para a rota GET /pokemons
    it('Deve retornar a lista de Pokémons', async () => {
        const response = await request(app)
            .get('/pokemons');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    // Teste para a rota PUT /pokemons/:idPokemon
    it('Deve atualizar um Pokémon existente', async () => {
        const response = await request(app)
            .put(`/pokemons/${pokemonId}`)
            .send({
                nome: 'Raichu',
                preco: 500,
                estoque: 2,
                tipo: 'Eletrico',
                raridade: 'Raro',
                url_img: 'https://example.com/raichu.png'
            });

        expect(response.status).toBe(200);
        expect(response.body.nome).toBe('Raichu');
    });

    // Teste para a rota DELETE /pokemons/:idPokemon
    it('Deve deletar um Pokémon existente', async () => {
        const response = await request(app)
            .delete(`/pokemons/${pokemonId}`);

        expect(response.status).toBe(200);
        expect(response.body.id_pokemon).toBe(pokemonId);
    });
});