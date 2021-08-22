import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadFilmFailure, loadFilmRequest, loadFilmSuccess } from './actions';
import { ActionTypesFilm, IFilm } from './types';

type loadFilmRequest = ReturnType<typeof loadFilmRequest>;

export function* load({ payload }: loadFilmRequest) {
  try {
    const results: AxiosResponse<IFilm>[] = yield all(
      payload.links.map(id => call(api.get, `/films/${id.replace(/\D/g, '')}`)),
    );

    yield put(loadFilmSuccess(results.map(item => item.data)));
  } catch (error) {
    yield put(loadFilmFailure());
  }
}

export default all([takeLatest(ActionTypesFilm.LOAD_REQUEST, load)]);
