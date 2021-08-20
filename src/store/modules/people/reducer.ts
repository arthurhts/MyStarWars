import produce from 'immer';
import {Reducer} from 'redux';
import {IPeopleState, ActionTypesPeople} from './types';

const INITIAL_STATE: IPeopleState = {
  pagination: null,
  data: null,
  loading: false,
  error: false,
};

const account: Reducer<IPeopleState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypesPeople.LOAD_SUCCESS: {
        draft.loading = false;
        draft.error = true;

        break;
      }
      case ActionTypesPeople.LOAD_REQUEST: {
        draft.loading = false;
        draft.error = false;
        draft.data = action.payload;
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

export default account;
