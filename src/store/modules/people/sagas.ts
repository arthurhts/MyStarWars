import { AxiosResponse } from 'axios';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadPeopleSuccess, loadPeopleFailure } from './actions';
import { ActionTypesPeople, IPeopleResponse } from './types';

export function* load() {
  try {
    const response: AxiosResponse<IPeopleResponse> = yield call(
      api.get,
      '/people',
    );

    yield put(loadPeopleSuccess(response.data));
  } catch (error) {
    yield put(loadPeopleFailure());
  }
}

export default all([takeLatest(ActionTypesPeople.LOAD_REQUEST, load)]);
