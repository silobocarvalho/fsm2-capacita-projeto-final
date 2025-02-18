-- CreateEnum
CREATE TYPE "TIPO_POKEMON" AS ENUM ('Eletrico', 'Agua', 'Planta', 'Pedra', 'Fastasma', 'Fogo', 'Terra', 'Psiquico', 'Ar', 'Veneno');

-- CreateEnum
CREATE TYPE "RARIDADE_POKEMON" AS ENUM ('Comum', 'Raro', 'SemiRaro', 'Epico', 'Legendario', 'Divino');

-- CreateTable
CREATE TABLE "pokemons" (
    "id_pokemon" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "estoque" INTEGER NOT NULL DEFAULT 0,
    "tipo" "TIPO_POKEMON" NOT NULL,
    "raridade" "RARIDADE_POKEMON" NOT NULL,
    "url_img" TEXT NOT NULL,

    CONSTRAINT "pokemons_pkey" PRIMARY KEY ("id_pokemon")
);

-- CreateIndex
CREATE UNIQUE INDEX "pokemons_nome_key" ON "pokemons"("nome");
