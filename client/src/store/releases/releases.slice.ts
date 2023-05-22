import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IReleasesSlice} from "./releases.interface";
import {createAlbum, deleteAlbum, getAlbums} from "./releases.action";
import {IAlbum} from "../../types/main-types";
import { AxiosResponse } from "axios";
import { useActions } from "../../hooks/useActions";

const initialState: IReleasesSlice = {
	albums: [],
  songs: [],
  isAlbumsLoading: false,
  isAlbumLoading: false,
  isSongLoading: false,
  isSongsLoading: false,
  isModalOpen: false,
  acceptModalId: -1,
  songsInfoId: -1
}

export const artistsSlice = createSlice({
	name: 'releases',
	initialState,
	reducers: {
    changeModalStatus: (state, action: PayloadAction<boolean>) => {
			state.isModalOpen = action.payload;
		},
    changeAcceptModalId: (state, action: PayloadAction<number>) => {
			state.acceptModalId = action.payload;
		},
    setShowSongsId: (state, action: PayloadAction<number>) => {
      state.songsInfoId = action.payload;
    }
	},
	extraReducers: (builder) => {
		builder.addCase(getAlbums.pending, (state) => {
			state.isAlbumsLoading = true;
		})
			.addCase(getAlbums.fulfilled, (state, action: PayloadAction<AxiosResponse<IAlbum[]>>) => {
				state.isAlbumsLoading = false;
				state.albums = action.payload.data;
			})
      .addCase(getAlbums.rejected, (state) => {
				state.isAlbumsLoading = false;
			})
      .addCase(createAlbum.pending, (state) => {
				state.isAlbumLoading = true;
			})
      .addCase(createAlbum.fulfilled, (state) => {
				state.isAlbumLoading = false;
				window.location.reload();
        state.isModalOpen = false;
			})
      .addCase(createAlbum.rejected, (state) => {
				state.isAlbumLoading = false;
			})
      .addCase(deleteAlbum.pending, (state) => {
				state.isAlbumLoading = true;
			})
      .addCase(deleteAlbum.fulfilled, (state) => {
				state.isAlbumLoading = false;
				window.location.reload();
        state.acceptModalId = -1;
			})
      .addCase(deleteAlbum.rejected, (state) => {
				state.isAlbumLoading = false;
			})
	},
});

export default artistsSlice;