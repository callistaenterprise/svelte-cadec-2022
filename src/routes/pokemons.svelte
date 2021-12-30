<script>
	import { pokemons } from '../stores/pokestore';
	import PokemonCard from '../components/pokemonCard.svelte';
	let searchTerm = '';
	let filteredPokemons = [];
	$: {
		console.log(searchTerm);
		if (searchTerm) {
			filteredPokemons = $pokemons.filter((pokemon) => {
				return (
					pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					pokemon.id.toString().includes(searchTerm)
				);
			});
		} else {
			filteredPokemons = [...$pokemons];
		}
	}
</script>

<svelte:head>
	<title>Find a pokemon</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Find your Pokemon</h1>
<input
	class="w-full rounded-md text-lg p-4 border-2 border-blue-200"
	type="text"
	placeholder="Search Pokemons"
	bind:value={searchTerm}
/>
<div class="py-4 grid gap-4 md:grid-cols-3 grid-cols-2">
	{#each filteredPokemons as pokemon}
		<PokemonCard {pokemon} />
	{/each}
</div>
