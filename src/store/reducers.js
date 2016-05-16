import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// Sync routes
import display from '../routes/Home/modules/display';

export const makeRootReducer = (asyncReducers) =>
  combineReducers({
    // Add sync reducers here
    display,
    router,
    ...asyncReducers,
  });

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
