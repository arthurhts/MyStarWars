import { AxiosResponse } from 'axios';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { IState } from '../..';
import api from '../../../services/api';
import {
  loadPeopleFailure,
  loadPeopleRequest,
  loadPeopleSuccess,
} from './actions';
import { ActionTypesPeople, IPeopleResponse, IPeopleState } from './types';

export type loadPeopleRequest = ReturnType<typeof loadPeopleRequest>;

export function* load() {
  try {
    const peoples: IPeopleState = yield select((state: IState) => {
      return state.peoples;
    });

    let response: AxiosResponse<IPeopleResponse>;

    if (peoples.totalLoaded < peoples.total) {
      response = yield call(api.get, `/people?page=${peoples.nextPage}`);
      yield put(loadPeopleSuccess(response.data));
    }

    if (peoples.totalLoaded === 0) {
      response = yield call(api.get, '/people');
      yield put(loadPeopleSuccess(response.data));
    }
  } catch (error) {
    yield put(loadPeopleFailure());
  }
}

export default all([takeLatest(ActionTypesPeople.LOAD_REQUEST, load)]);
