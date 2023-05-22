import { combineReducers } from 'redux';
import artistsSlice from './artists/artists.slice';
import releasesSlice from './releases/releases.slice';
export const rootReducers = combineReducers({
  artists: artistsSlice.reducer,
  releases: releasesSlice.reducer
});
