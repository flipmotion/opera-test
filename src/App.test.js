import { render, screen } from './test-utils';
import App from './App';

describe('components', () => {
  it('Renders the connected app with initialState currectly', () => {
    const intialState = {
      isLoading: true,
      error: null,
      data: {},
    };

    render(<App />, { initialState: { block: intialState } });
  
    expect(screen.queryByTestId("App")).toBeInTheDocument();
    expect(screen.queryByTestId("App")).toHaveTextContent('loading...');
  })
})

