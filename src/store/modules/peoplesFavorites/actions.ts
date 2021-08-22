import { ActionTypesPeopleFavorites } from './types';

export function loadFilmRequest(namePeople: string) {
  return {
    type: ActionTypesPeopleFavorites.ADD_FAVORITES,
    payload: {
      namePeople,
    },
  };
}

export function loadFilmSuccess(namePeople: string) {
  return {
    type: ActionTypesPeopleFavorites.REMOVE_FAVORITES,
    payload: namePeople,
  };
}
