import { useSelector } from 'react-redux';
import { getIsLoading, getBlockData, getError } from '../store';
import { isEmpty } from '../utils';
import Results from './Results';
import ResultsMsg from './ResultsMsg';

const Container = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const block = useSelector(getBlockData);

  const isError = error && !isLoading;
  const isBlockAvailable = !error && !isLoading && !isEmpty(block);
  const isBlockEmpty = !error && !isLoading && isEmpty(block);

  return (
    <>
      {isLoading && (
        <ResultsMsg message='loading...' />
      )}
      {isError && (
        <ResultsMsg message={error.message} />
      )}
      {isBlockEmpty && (
        <ResultsMsg message='no search results' />
      )}
      {isBlockAvailable && (
        <Results {...block} />
      )}
    </>
  );
}

export default Container;
