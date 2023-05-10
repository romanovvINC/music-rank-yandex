import { createSlice } from "@reduxjs/toolkit";
import { asdas } from "./main-page.interface";

const initialState: asdas = {
  asdsd: 'asdas'
}

export const mainPageSlice = createSlice({
	name: 'main-page',
	initialState,
	reducers: {
		
	}
});

export default mainPageSlice.reducer;