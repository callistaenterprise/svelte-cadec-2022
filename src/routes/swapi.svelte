<script>
  import * as R from 'ramda';
  import { starwarsPeople } from '../stores/startwarsStore';

  let people = [];
  $:{people = $starwarsPeople;
  // console.log({people})
  }
  const sortBy =(attribute)=>{
    console.log('let sort'+attribute);
    const sortFunc = R.sortBy(R.prop(attribute)); 
    people= sortFunc(people);
  }
</script>
<h1 class="text-center text-2xl text-blue-500">StarWars Characters</h1>

{#if people.length>1}
<table class="table-auto border-8 w-full">
  <thead>
    <tr class="text-left text-2xl">
      <th on:click={()=>sortBy('name')}>Name</th>
      <th on:click={()=>sortBy('originFrom')}>Planet</th>
      <th on:click={()=>sortBy('mass')}>Weight</th>
    </tr>
  </thead>
  <tbody>
    {#each people as swPeople}
    <tr class="border-2 text-xl">
      <td>{swPeople.name}</td>
      <td>{swPeople.originFrom}</td>
      <td>{swPeople.mass}</td>
    </tr>
		
	{/each}
  </tbody>
</table>

{/if}

