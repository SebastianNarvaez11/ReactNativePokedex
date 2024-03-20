import {pokeApi} from '../../config/api/pokeApi';
import {Pokemon} from '../../domain/models/pokemon';
import {
  PokeAPIPaginatedResponse,
  PokeAPIPokemon,
} from '../../infrastructure/interfaces/pokepi.interface';
import {PokemonMapper} from '../../infrastructure/mappers/pokemon.mapper';

export const getPokemons = async (
  page: number,
  limit: number = 20,
): Promise<Pokemon[]> => {
  try {
    const url = `/pokemon?offset=${page * 10}&limit=${limit}`;

    // traer el listado de pokemons
    const {data} = await pokeApi.get<PokeAPIPaginatedResponse>(url);

    // obetener la informacion detallada para cada pokemon
    const pokemonPromises = data.results.map(info => {
      return pokeApi.get<PokeAPIPokemon>(info.url);
    });
    const pokeApiPokemons = await Promise.all(pokemonPromises);

    // mapeo de los pokemons
    const pokemonsPromises = pokeApiPokemons.map(item =>
      PokemonMapper.pokeApiPokemonToEntity(item.data),
    );

    return await Promise.all(pokemonsPromises);
  } catch (error) {
    console.log(error);
    throw new Error('Error getting pokemons');
  }
};
