import { render as rtlRender } from '@testing-library/react';
import { createStore } from './createStore';
import { Provider } from 'react-redux';
import * as block from './store';

const render = (
  ui,
  {
    initialState,
    store = createStore(block)({
      block: initialState
    }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }
