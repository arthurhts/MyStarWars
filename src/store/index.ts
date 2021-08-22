import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import { IPeopleState } from './modules/people/types';
import { IFilmState } from './modules/film/types';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export interface IState {
  peoples: IPeopleState;
  films: IFilmState;
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
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
