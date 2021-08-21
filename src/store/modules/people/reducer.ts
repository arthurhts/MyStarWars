import produce from 'immer';
import { Reducer } from 'redux';
import { IPeopleState, ActionTypesPeople } from './types';

const INITIAL_STATE: IPeopleState = {
  pagination: null,
  data: null,
  loading: false,
  error: false,
};

const people: Reducer<IPeopleState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypesPeople.LOAD_SUCCESS: {
        draft.loading = false;
        draft.error = false;

        break;
      }
      case ActionTypesPeople.LOAD_REQUEST: {
        draft.loading = false;
        draft.error = false;
        draft.data = action.payload.data;
        draft.pagination = action.payload.pagination;
        break;
      }
      case ActionTypesPeople.LOAD_FAILURE: {
        draft.loading = false;
        draft.error = true;

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default people;
