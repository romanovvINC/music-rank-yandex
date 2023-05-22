import { createAsyncThunk } from '@reduxjs/toolkit';
import {IAlbum} from "../../types/main-types";
import { AxiosResponse } from 'axios';
import { albumService } from '../../service/album-service/album-service';

export const getAlbums = createAsyncThunk<AxiosResponse<IAlbum[]>>(
  'get albums',
  async (_, thunkApi) => {
    try {
      const response = await albumService.getAll();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const createAlbum = createAsyncThunk<AxiosResponse<IAlbum>, FormData>(
  'create album',
  async (album, thunkApi) => {
    try {
      const response = await albumService.postAlbum(album);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const deleteAlbum = createAsyncThunk<AxiosResponse<IAlbum>, number>(
  'delte album',
  async (id, thunkApi) => {
    try {
      const response = await albumService.deleteAlbum(id);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
