import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IArtistsSlice} from "./artists.interface";
import {getArtists} from "./artists.action";
import {IArtist} from "../../types/main-types";
import { AxiosResponse } from "axios";

const initialState: IArtistsSlice = {
	artists: [],
  isLoading: false,
  error: ''
}

export const artistsSlice = createSlice({
	name: 'artists',
	initialState,
	reducers: {
		changeFormStatus: (state) => {
			state.artists = []
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getArtists.pending, (state) => {
			state.isLoading = true;
		})
			.addCase(getArtists.fulfilled, (state, action: PayloadAction<AxiosResponse<IArtist[]>>) => {
        console.log(action.payload.data);
				state.isLoading = false;
				state.artists = action.payload.data;
			})
			.addCase(getArtists.rejected, (state) => {
				state.isLoading = true;
			})
	},
});

export default artistsSlice.reducer;