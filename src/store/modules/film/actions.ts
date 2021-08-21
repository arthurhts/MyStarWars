import { action } from 'typesafe-actions';
import { ActionTypesFilm, IFilm } from './types';

export const loadFilmRequest = () => action(ActionTypesFilm.LOAD_REQUEST);

export const loadFilmSuccess = (data: IFilm) =>
  action(ActionTypesFilm.LOAD_SUCCESS, data);

export const loadFilmFailure = () => action(ActionTypesFilm.LOAD_FAILURE);
