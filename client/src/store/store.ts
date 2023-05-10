import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {mainPageSlice} from './main-page/main-page-slice';
import {artistsSlice} from './artists/artists.slice';
import { rootReducers } from './root-reducer';


const store = configureStore({
	reducer: rootReducers,
	devTools: true,
});

export default store;

export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch