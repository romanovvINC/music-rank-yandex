import { createSlice } from "@reduxjs/toolkit";
import { AlbumState } from "../../types/store-types";

const initialState: AlbumState = {
	id: -1,
	artist: '',
	cite: '',
	genres: [],
	numOfReviews: null,
	rating: {
		numOfScores: null,
		siteScore: null,
		totalPlace: null,
		userScore: null,
		yearPlace: null
	},
	realaseDate: null,
	reviews: [],
	songs: {
		ASide: [],
		BSide: []
	},
	title: ''
}

export const albumSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		
	}
});

export default albumSlice.reducer;