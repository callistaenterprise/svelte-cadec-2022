<script>
  import { starwarsPeople } from '../stores/startwarsStore';

  let people = [];
  $:{people = $starwarsPeople;
  // console.log({people})
  }
</script>
<h1>StarWars Characters</h1>

{#if people.length>1}
<table class="table-auto border-8 w-full">
  <thead>
    <tr>
      <th class="text-left">Name</th>
      <th class="text-left">Planet</th>
      <th class="text-left">Mass</th>
    </tr>
  </thead>
  <tbody>
    {#each people as swPeople}
    <tr class="border-2">
      <td>{swPeople.name}</td>
      <td>{swPeople.originFrom}</td>
      <td>{swPeople.mass}</td>
    </tr>
		
	{/each}
  </tbody>
</table>

{/if}

