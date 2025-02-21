/*
  Warnings:

  - The primary key for the `pokemons` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "pokemons" DROP CONSTRAINT "pokemons_pkey",
ALTER COLUMN "id_pokemon" DROP DEFAULT,
ALTER COLUMN "id_pokemon" SET DATA TYPE TEXT,
ADD CONSTRAINT "pokemons_pkey" PRIMARY KEY ("id_pokemon");
DROP SEQUENCE "pokemons_id_pokemon_seq";
