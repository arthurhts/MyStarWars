import produce from 'immer';
import { Reducer } from 'redux';
import { IPeopleState, ActionTypesPeople } from './types';

const INITIAL_STATE: IPeopleState = {
  data: [],
  total: 0,
  totalLoaded: 0,
  nextPage: 1,
  loading: false,
  error: false,
};

const people: Reducer<IPeopleState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypesPeople.LOAD_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.data = [...state.data, ...action.payload.results];
        draft.total = action.payload.count;
        draft.totalLoaded = state.totalLoaded + action.payload.results.length;
        draft.nextPage++;
        break;
      }
      case ActionTypesPeople.LOAD_REQUEST: {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case ActionTypesPeople.LOAD_FAILURE: {
        draft.loading = false;
        draft.error = true;
        break;
      }
      case ActionTypesPeople.RESET: {
        draft.data = [];
        draft.total = 0;
        draft.totalLoaded = 0;
        draft.nextPage = 1;
        draft.loading = false;
        draft.error = false;
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default people;
