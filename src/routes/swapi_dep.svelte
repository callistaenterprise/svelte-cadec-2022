<!--- script>
	import {setClient} from 'svelte-apollo';
	import createApolloClient from '$lib/utilites/createApolloClient';
	setClient(createApolloClient());
</script --->
<script>
	// import {setClient} from 'svelte-apollo';
	// import createApolloClient from '$lib/utilites/createApolloClient';
	import { query, getClient } from 'svelte-apollo';
	import {gql} from '@apollo/client/core';

	// const starWarsApolloClient = createApolloClient();
	// setClient(starWarsApolloClient);
	
	const GET_ALLPEOPLE = gql`query {
  allPeople{
    people{
      name
    }
  }
}`;

const client = getClient();

const	people = query(GET_ALLPEOPLE,{fetchPolicy:'network-only'});
let compSWPeople={};
console.log({client});

$: {
	compSWPeople= {...$people};
	// people = query(GET_ALLPEOPLE);
	console.log('reload me!!!!');
	// const result = people.getCurrentResult();
	// console.log({result});
	// people.refetch();
	console.log(people.data);
	console.log(compSWPeople);

}

// console.log('loading '+ $people.loading);
// console.log('error '+ $people.error);
// console.log('data '+ $people.data);
console.log('what');
console.log($people);
</script>
{#if $people.loading}
<h1 class="text-xl text-center">
	loading...
</h1>	
{:else if $people.error }
<h1 class="text-xl text-center">
	error...
</h1>	
{:else}
<h1 class="text-xl text-center">
	some SW data?
	{$people.data}
</h1>	
{/if}
<h1 class="text-xl text-center">
	hi if you see this you are very smart and faboules and i think you should know that
</h1>
<h1 class="text-xl text-center">
	{compSWPeople.data}
</h1>
