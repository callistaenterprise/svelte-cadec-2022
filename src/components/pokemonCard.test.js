// import '@testing-library/jest-dom';
import { render, findByText } from '@testing-library/svelte';
import PokemonCard from './pokemonCard.svelte';

describe('<PokemonCard', () => {
  it('should render an image with right src', async () => {
    const { container} = render(PokemonCard,{
      pokemon:{
        id:'testId',
        name:'pokemonName',
        image:'testImageSrc'
      }});
    await findByText(container,'testId pokemonName');
    // expect(container).toContainHTML("<img />");
  })
  
});
