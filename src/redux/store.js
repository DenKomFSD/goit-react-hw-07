import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contactsSlice";
import filtersSlice from "./filtersSlice";

import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const contactsPersistConfig = {
  key: "contactsValue",
  storage,
  //то что хотим сохранить массив свойств
  whitelist: ["items"],
};

const pContactsReducer = persistReducer(contactsPersistConfig, contactsSlice);

export const store = configureStore({
  reducer: {
    contacts: pContactsReducer,
    filters: filtersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
