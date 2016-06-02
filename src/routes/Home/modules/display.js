import { createAction, handleActions } from 'redux-actions';
import queryString from 'query-string';

const displayOptions = [
  {
    key: 'list',
    name: 'List',
    layout: 'list',
  },
  {
    key: 'grid',
    name: 'Grid',
    layout: 'square',
  },
];

// Constants
export const COLLECTION_ID_SET = 'COLLECTION_ID_SET';
export const DISPLAY_SET = 'DISPLAY_SET';

// Action Creators
export const setCollection = (payload) => ({
  type: COLLECTION_ID_SET,
  payload,
  meta: {
    debounce: {
      time: 300,
    },
  },
});

export const setDisplay = createAction(DISPLAY_SET);

export const actions = {
  setCollection,
  setDisplay,
};


// Reducer
const { collection } = queryString.parse(window.location.search);

export const initialState = {
  collectionId: collection,
  options: displayOptions,
  selected: displayOptions[0],
};

export default handleActions({
  [COLLECTION_ID_SET]: (state, { payload }) => ({ ...state, collectionId: payload }),
  [DISPLAY_SET]: (state, { payload }) => ({ ...state, selected: payload }),
}, initialState);
