import { combineReducers } from 'redux';
import people from './people/reducer';
import film from './film/reducer';
export default combineReducers({
  people,
  film,
});
