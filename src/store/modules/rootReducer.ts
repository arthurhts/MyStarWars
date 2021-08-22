import { combineReducers } from 'redux';
import { peoples } from './peoples/reducer';
import { films } from './films/reducer';
import { peoplesFavorites } from './peoplesFavorites/reducer';

export default combineReducers({
  peoples,
  films,
  peoplesFavorites,
});
