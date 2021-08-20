import {action} from 'typesafe-actions';
import {ActionTypesPeople, IPeople} from './types';

export const loadPeopleRequest = () => action(ActionTypesPeople.LOAD_REQUEST);

export const loadPeopleSuccess = (data: IPeople) =>
  action(ActionTypesPeople.LOAD_SUCCESS, data);

export const loadPeopleFailure = () => action(ActionTypesPeople.LOAD_FAILURE);
