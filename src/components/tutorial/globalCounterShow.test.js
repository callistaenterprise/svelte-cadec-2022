import { tick } from 'svelte';
import {render, findByText} from '@testing-library/svelte';
import {counter} from "../../stores/counterstore.js";
import GlobalCounter from "./globalCounterShow.svelte";

describe('<GlobalCounter Show', () => {
  it('should show and subscribe the value of the counter', async () => {
    counter.set(23);
    const subscribeSpy= jest.spyOn(counter,'subscribe');
    const {container} = render(GlobalCounter);
    expect(subscribeSpy).toHaveBeenCalled;
    const textComp = await findByText(container,'Number of counts 23');
    expect(textComp).toHaveTextContent('Number of counts 23');
    counter.set(33);
    await tick();
    const textComp2 = await findByText(container,'Number of counts 33');
    expect(textComp2).toHaveTextContent('Number of counts 33');
  })
})
