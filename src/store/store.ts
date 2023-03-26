import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import mainPageSlice from './main-page/main-page-slice';


export const rootReducer = combineReducers({
	mainPageSlice
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']