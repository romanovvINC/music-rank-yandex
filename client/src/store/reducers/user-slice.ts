import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types/store-types";

const initialState: UserState = {
	albums: [],
	artists: [],
	authStatus: false,
	avatarUrl: '',
	reviews: [],
	songs: [],
	userName: 'Unknown Guy'
}

export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		
	}
});

export default userSlice.reducer;