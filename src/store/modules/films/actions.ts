import { ActionTypesFilm, IFilm } from './types';

export function loadFilmRequest(links: string[]) {
  return {
    type: ActionTypesFilm.LOAD_REQUEST,
    payload: {
      links,
    },
  };
}

export function loadFilmSuccess(films: IFilm[]) {
  return {
    type: ActionTypesFilm.LOAD_SUCCESS,
    payload: films,
  };
}

export function loadFilmFailure() {
  return {
    type: ActionTypesFilm.LOAD_FAILURE,
  };
}

export function resetFilm() {
  return {
    type: ActionTypesFilm.RESET,
  };
}
