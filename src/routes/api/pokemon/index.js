export async function get({ params }) {
	const fetchPokemons = async (num = 150) => {
		console.log('running fetchPokemon');
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
		return loadedPokemon;
	};
	console.log('running api call ');
	const pokemons = await fetchPokemons();
	return {
		status: 200,
		body: {
			pokemons: pokemons
		}
	};
}
