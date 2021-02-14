import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { createReducer, api } from '../utils';

export const FETCH_BLOCK_REQUEST = 'FETCH_BLOCK_REQUEST';
export const FETCH_BLOCK_SUCCESS = 'FETCH_BLOCK_SUCCESS';
export const FETCH_BLOCK_ERROR = 'FETCH_BLOCK_ERROR';

const intialState = {
  isLoading: true,
  error: null,
  data: {},
};

const reducer = createReducer({
  [FETCH_BLOCK_REQUEST](state, action) {
    return {
      ...state,
      isLoading: true,
      error: null,
      data: {},
    };
  },
  [FETCH_BLOCK_SUCCESS](state, { result }) {
    return {
      ...state,
      isLoading: false,
      data: result,
    };
  },
  [FETCH_BLOCK_ERROR](state, { error }) {
    return {
      ...state,
      isLoading: false,
      error,
      data: {},
    };
  },
}, intialState);

export const fetchBlockByNumber = number => async dispatch => {
  dispatch({ type: FETCH_BLOCK_REQUEST });

  const { result, error = null } = await api.post.getBlockByNumber(number);

  if (!error) {
    dispatch({
      type: FETCH_BLOCK_SUCCESS,
      result,
    });
  } else {
    dispatch({
      type: FETCH_BLOCK_ERROR,
      error
    })
  }
}

export const getBlock = ({ block }) => block || {};

export const getBlockData = createSelector(
  getBlock,
  ({ data }) => data ? ({
    hash: data.hash,
    number: data.number,
    transactions: data.transactions,
  }) : {},
)

export const getIsLoading = createSelector(
  getBlock,
  ({ isLoading }) => isLoading
);

export const getError = createSelector(
  getBlock,
  ({ error }) => error
);

export const getTransactions = createSelector(
  getBlockData,
  ({ transactions = [] }) => transactions.map(({
    from,
    to,
    hash
  }) => ({
    from,
    to,
    hash
  })) || []
);

export const getReducers = () => combineReducers({
  block: reducer
});
