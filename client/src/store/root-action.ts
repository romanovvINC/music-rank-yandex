import * as artistsActions from './artists/artists.action';
import * as releasesActions from './releases/releases.action';
import releasesSlice from './releases/releases.slice';

const dasksda = releasesSlice.actions;

export const allActions = {
	...artistsActions,
  ...releasesActions,
  ...releasesSlice.actions
}