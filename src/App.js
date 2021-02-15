import { useEffect } from 'react';

import { fetchBlockByNumber } from './store';
import { useActions } from './utils';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';


const App = () => {
  const fetchBlock = useActions(fetchBlockByNumber);
  useEffect(() => fetchBlock(), []);

  return (
    <div data-testid="App">
      <SearchForm />
      <SearchResults />
    </div>
  )
}

export default App;
