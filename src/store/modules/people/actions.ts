import { ActionTypesPeople, IPeopleResponse } from './types';

export function loadPeopleRequest() {
  return {
    type: ActionTypesPeople.LOAD_REQUEST,
  };
}

export function loadPeopleSuccess(data: IPeopleResponse) {
  return {
    type: ActionTypesPeople.LOAD_SUCCESS,
    payload: data,
  };
}

export function loadPeopleFailure() {
  return {
    type: ActionTypesPeople.LOAD_FAILURE,
  };
}

export function resetPeople() {
  return {
    type: ActionTypesPeople.RESET,
  };
}
