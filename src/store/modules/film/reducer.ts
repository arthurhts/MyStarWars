import produce from 'immer';
import { Reducer } from 'redux';
import { IFilmState, ActionTypesFilm } from './types';

const INITIAL_STATE: IFilmState = {
  data: [],
  loading: false,
  error: false,
};

const film: Reducer<IFilmState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypesFilm.LOAD_SUCCESS: {
        console.log(action);
        draft.loading = false;
        draft.error = false;
        draft.data = action.payload;
        break;
      }
      case ActionTypesFilm.LOAD_REQUEST: {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case ActionTypesFilm.LOAD_FAILURE: {
        draft.loading = false;
        draft.error = true;
        break;
      }
      case ActionTypesFilm.RESET: {
        draft.data = [];
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

export default film;
