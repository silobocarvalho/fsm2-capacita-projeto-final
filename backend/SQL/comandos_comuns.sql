CREATE TYPE TIPO_POKEMON AS ENUM ('Elétrico', 'Água', 'Planta', 'Pedra', 'Fastasma', 'Fogo', 'Terra', 'Psiquico', 'Ar', 'Veneno'); 
CREATE TYPE RARIDADE_POKEMON AS ENUM ('Comum', 'Raro', 'Semi-raro', 'Épico', 'Legendário', 'Divino'); 

-- Usar -- para comentários
-- DROP TYPE TIPO_POKEMON CASCADE
-- DROP TABLE pokemons

CREATE TABLE pokemons (
id_pokemon SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
preco DECIMAL(10, 2),
estoque INT DEFAULT 0,
tipo TIPO_POKEMON,
raridade RARIDADE_POKEMON,
url_img VARCHAR(200)
);

INSERT INTO pokemons (nome, preco, tipo, raridade, url_img) VALUES
('Pikachu', 399.99, 'Elétrico', 'Comum', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'),
('Bulbasauro', 199.99, 'Planta', 'Comum', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'),
('Ekans', 39.00, 'Veneno', 'Semi-raro', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png'),
('Charmander', 129.00, 'Fogo', 'Semi-raro', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'),
('Mewtwo', 5000.00, 'Psiquico', 'Épico', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png')