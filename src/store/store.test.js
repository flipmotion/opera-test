import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  FETCH_BLOCK_REQUEST,
  FETCH_BLOCK_SUCCESS,
  fetchBlockByNumber,
} from './';
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_BLOCK_SUCCESS when fetching has been done', () => {
    fetchMock.mock('https://cloudflare-eth.com/', {
      body: {
        result: {
          hash: 'test',
          number: 'test',
          transactions: [],
        }
      },
    });

    const expectedActions = [
      { type: FETCH_BLOCK_REQUEST },
      { type: FETCH_BLOCK_SUCCESS, result: {
        hash: 'test',
        number: 'test',
        transactions: [],
      } }
    ];

    const store = mockStore({ block: {
      isLoading: true,
      data: {},
      error: null
    } });

    return store.dispatch(fetchBlockByNumber(436)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
});
