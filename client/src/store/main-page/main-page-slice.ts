import { createSlice } from "@reduxjs/toolkit";
import { IMainPage } from "./main-page.interface";

const initialState: IMainPage = {
	promo: null,
  reviews: [],
  charts: [],
  isLoading: false,
  error: ''
}

export const mainPageSlice = createSlice({
	name: 'main-page',
	initialState,
	reducers: {
		
	}
});

export default mainPageSlice.reducer;