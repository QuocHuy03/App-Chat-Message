import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { combineReducers } from "redux";
import authSlice from "./authSlice";
import rootSaga from "../redux/sagas/rootSaga";
import thunk from "redux-thunk";

const authPersistConfig = {
  key: "auth",
  storage: storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, thunk],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
