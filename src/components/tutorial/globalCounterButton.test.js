
import {render, findByText, fireEvent} from '@testing-library/svelte';
import {counter} from "../../stores/counterstore.js";
import GlobalCounter from "./globalCounterButton.svelte";

describe('<GlobalCounter', () => {
  it('should render right at startup', async () => {
    const { container } = render(GlobalCounter);
    await findByText(container, 'Clicks: 0');
  })
  it('should increase store at click', async () => {
    const setSpy = jest.spyOn(counter,'set');
    const { container } = render(GlobalCounter);
    const buttonComp = await findByText(container, 'Clicks: 0');
    await fireEvent.click(buttonComp);
    expect(buttonComp).toHaveTextContent('Clicks: 1');
    expect(setSpy).toHaveBeenCalled();
    expect(setSpy).toHaveBeenCalledWith(1);
    setSpy.mockClear();
    await fireEvent.click(buttonComp);
    expect(buttonComp).toHaveTextContent('Clicks: 2');
    expect(setSpy).toHaveBeenCalled();
    expect(setSpy).toHaveBeenCalledWith(2);

  })
});
