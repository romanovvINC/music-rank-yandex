import { createAsyncThunk } from '@reduxjs/toolkit';
import {IArtist} from "../../types/main-types";
import {artistService} from "../../service/artist-service/artist-service";
import { AxiosResponse } from 'axios';

export const getArtists = createAsyncThunk<AxiosResponse<IArtist[]>>(
  'add comment',
  async (_, thunkApi) => {
    try {
      const response = await artistService.getAll();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
