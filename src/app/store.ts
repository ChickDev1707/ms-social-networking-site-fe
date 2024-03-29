import { combineReducers, configureStore } from '@reduxjs/toolkit';
import HomeReducer from '../pages/Home/state/homeSlice';
import UserReducer from '../pages/User/state/userSlice';
import { useDispatch } from 'react-redux';
import LoginReducer from '../pages/Login/loginSlice';
import RegisterReducer from '../pages/Register/registerSlice';
import ChatReducer from '../pages/Chat/state/chatSlice';
import NotificationReducer from '../components/Notification/state/notificationSlice';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage
//   // whitelist: ['home', 'auth', 'chat', 'user']
// };

const rootReducer = combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
  home: HomeReducer,
  chat: ChatReducer,
  user: UserReducer,
  notification: NotificationReducer
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

// export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
