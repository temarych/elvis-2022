import { modeReducer } from './reducers/modeReducer';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { languageReducer } from './reducers/languageReducer';

const persistConfig = {
  key: "root",
  storage
}

export interface AppState {
  modeState: ReturnType<typeof modeReducer>;
  languageState: ReturnType<typeof languageReducer>;
}

export const rootReducer = combineReducers<AppState>({
  modeState: modeReducer,
  languageState: languageReducer
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);