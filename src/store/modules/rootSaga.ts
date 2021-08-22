import { all } from 'redux-saga/effects';

import peoples from './people/sagas';
import films from './film/sagas';

export default function* rootSaga(): any {
  return yield all([peoples, films]);
}
