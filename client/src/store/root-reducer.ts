import { combineReducers } from 'redux';
import artistsReducer from './artists/artists.slice';
export const rootReducers = combineReducers({
  artists: artistsReducer
});
