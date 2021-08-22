import produce from 'immer';
import { Reducer } from 'redux';
import { ActionTypesPeopleFavorites, IPeopleFavoritesState } from './types';

const INITIAL_STATE: IPeopleFavoritesState = {
  favorites: [],
};

const peoplesFavorites: Reducer<IPeopleFavoritesState> = (
  state = INITIAL_STATE,
  action,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypesPeopleFavorites.ADD_FAVORITES: {
        draft.favorites.push(action.payload);
        break;
      }
      case ActionTypesPeopleFavorites.REMOVE_FAVORITES: {
        draft.favorites = state.favorites.filter(
          item => item !== action.payload,
        );
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export { peoplesFavorites };
