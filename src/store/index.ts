import { IPeopleFavoritesState } from './modules/peoplesFavorites/types';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import { IPeopleState } from './modules/peoples/types';
import { IFilmState } from './modules/films/types';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export interface IState {
  peoples: IPeopleState;
  films: IFilmState;
  peoplesFavorites: IPeopleFavoritesState;
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['peoplesFavorites'],
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<IState> = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor, sagaMiddleware };
