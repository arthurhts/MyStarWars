import { ActionTypesPeopleFavorites } from './types';

export function addPeopleFavorites(namePeople: string) {
  return {
    type: ActionTypesPeopleFavorites.ADD_FAVORITES,
    payload: namePeople,
  };
}

export function removePeopleFavorites(namePeople: string) {
  return {
    type: ActionTypesPeopleFavorites.REMOVE_FAVORITES,
    payload: namePeople,
  };
}
