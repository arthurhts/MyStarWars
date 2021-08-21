import { combineReducers } from 'redux';
import peoples from './people/reducer';
import films from './film/reducer';
export default combineReducers({
  peoples,
  films,
});
