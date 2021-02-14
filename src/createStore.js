import {
  compose,
  createStore as createReduxStore,
  applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

export const getMiddlewares = (middlewares = []) => {
  let mergedMiddlewares = applyMiddleware(thunkMiddleware, ...middlewares);

  if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    mergedMiddlewares = compose(
      mergedMiddlewares,
      window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 })
    );
  }

  return mergedMiddlewares;
};

export const createStore = ({
  getReducers,
  getPersistedState = Function.prototype,
  middlewares = [],
}) => props => createReduxStore(
  getReducers(props),
  getPersistedState(props),
  getMiddlewares(middlewares),
);
