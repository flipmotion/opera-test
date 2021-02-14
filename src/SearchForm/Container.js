import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useActions, toHex, onlyNumbers } from '../utils';
import { fetchBlockByNumber, getIsLoading } from '../store';
import Component from './Component';

const Container = () => {
  const [inputValue, setInputValue] = useState('');
  const fetchBlock = useActions(fetchBlockByNumber);
  const isLoading = useSelector(getIsLoading);

  const onChange = useCallback(({ target: { value } }) => setInputValue(value), []);
  const onKeyPress = useCallback(event => onlyNumbers(event), []);
  const onSubmit = useCallback(() => fetchBlock(toHex(+inputValue)), [inputValue, fetchBlock]);

  return (
    <Component
      onChange={onChange}
      onSubmit={onSubmit}
      onKeyPress={onKeyPress}
      isLoading={isLoading}
      inputValue={inputValue}
    />
  );
}

export default Container;
