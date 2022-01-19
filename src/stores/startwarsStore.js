import { writable } from 'svelte/store';

export const starwarsPeople = writable([]);

const fetchStarWarsPeople = async () => {
	const url = "https://swapi-graphql.netlify.app/.netlify/functions/index";
	const res = await fetch(url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `{
        allPeople{
          people{
            name
            mass
            homeworld{
              name
            }
          }
        }
      }`
    })
  });
	const data = await res.json();
  console.log({data});
  console.log(data.allPeople);
	const loadedSwPeople = data.data.allPeople.people.map((data, index) => {
		const id = index + 1;
		return {
			name: data.name,
      mass:data.mass,
      originFrom: data.homeworld?.name,
			id,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
		};
	});
  // starwarsPeople.set(data);
	starwarsPeople.set(loadedSwPeople);
};
fetchStarWarsPeople();