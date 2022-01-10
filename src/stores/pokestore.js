import { writable } from 'svelte/store';

export const pokemons = writable([]);

const fetchPokemon = async (num) => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedPokemon = data.results.map((data, index) => {
		const id = index + 1;
		return {
			name: data.name,
			id,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
		};
	});
	pokemons.set(loadedPokemon);
};
// setTimeout(()=>{
//   fetchPokemon(3)
// }, 3000);
fetchPokemon(150);
