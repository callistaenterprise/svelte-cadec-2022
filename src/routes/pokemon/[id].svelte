<script context="module">
	// This is done before the mount process and can be server or clientside
	// It also shared for all instances of this component
	export async function load({ page }) {
		const id = page.params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokemon = await res.json();
		return { props: { pokemon } };
	}
</script>

<script>
	import { scale } from 'svelte/transition';
	// client side we recive the result from the serverside
	export let pokemon;
</script>
<div out:scale={{duration:1500}}>
<h1 class="text-2xl text-center my-8 text-gray-400">Pokename</h1>
<h1 class="text-4xl text-center my-1 uppercase">{pokemon.name}</h1>
<div class="flex justify-center">
	<div class="grid grid-cols-2 p-16 gap-16"  >
		<img src={pokemon.sprites.front_default} />
		<img src={pokemon.sprites.back_default} />
		<img src={pokemon.sprites.front_shiny} />
		<img src={pokemon.sprites.back_shiny} />
	</div>
</div>
<h1 class="text-2xl text-center my-8 text-gray-400">Height</h1>
<h1 class="text-4xl text-center my-1 uppercase">{pokemon.height}</h1>
<h1 class="text-2xl text-center my-8 text-gray-400">Weight</h1>
<h1 class="text-4xl text-center my-1 uppercase">{pokemon.weight}</h1>
{#each pokemon.types as type}
	<h1 class="text-2xl text-center my-8 text-gray-400">Type</h1>
	<h1 class="text-4xl text-center my-1 uppercase">{type.type.name}</h1>
{/each}
</div>
