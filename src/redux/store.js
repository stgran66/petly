import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth/';
import filterReducer from './notices/filterSlice';
import noticesReducer from './notices/noticesSlice';
import friendsReducer from './friends/friendsSlice';
import userReducer from './user/userSlise';
import themeReducer from './theme/themeSlice';

const { authReducer } = auth;

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER, PERSIST],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['theme'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    notices: noticesReducer,
    filter: filterReducer,
    friends: friendsReducer,
    user: userReducer,
    theme: persistReducer(themePersistConfig, themeReducer),
  },
  middleware,
});

const persistor = persistStore(store);

const redux = { store, persistor };

export default redux;
