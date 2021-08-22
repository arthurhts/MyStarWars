//ACTIONS TYPES
export enum ActionTypesPeopleFavorites {
  ADD_FAVORITES = '@peopleFavorites/ADD_FAVORITES',
  REMOVE_FAVORITES = '@peopleFavorites/REMOVE_FAVORITES',
}

//STATE TYPE
export interface IPeopleFavoritesState {
  readonly favorites: string[];
}
