import 'cross-fetch/polyfill';
import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export const useActions = (actions, deps) => {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch))
      }
      return bindActionCreators(actions, dispatch)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [dispatch, ...deps] : [dispatch]
  );
};

export const createReducer = (
  handleActions,
  initialState = {}
) => (
  state = initialState,
  action,
  ...otherParams
) => handleActions[action.type] ? handleActions[action.type](state, action, ...otherParams) : state;

const checkForError = response => {
  if (!response.ok) throw Error(response.statusText);
  return response.json();
};

const fetchWrapper = ({
  number
}) => fetch(`/api/block/${number}`, {
  method: 'GET',
}).then(checkForError)
  .then(result => result)
  .catch(e => ({ error: {
    message: 'Something goes wrong. May the force be with you!'
}}));

export const api = {
  post: {
    getBlockByNumber: (number = 'latest') => fetchWrapper({
      methodName: 'eth_getBlockByNumber',
      number,
    })
  }
}

export const isEmpty = (obj) => obj && Object.keys(obj).length === 0 && obj.constructor === Object;

export const onlyNumbers = event => {
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault();
  }
};
