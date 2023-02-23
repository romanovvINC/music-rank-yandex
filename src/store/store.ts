import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import albumSlice from './reducers/album-slice';


export const rootReducer = combineReducers({
	albumSlice
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']