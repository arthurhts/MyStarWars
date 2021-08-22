import { all } from 'redux-saga/effects';

import peoples from './peoples/sagas';
import films from './films/sagas';

export default function* rootSaga(): any {
  return yield all([peoples, films]);
}
