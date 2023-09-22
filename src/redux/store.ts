import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from './slices/task.slice';

export const rootReducer = combineReducers({
  tasks: taskReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
