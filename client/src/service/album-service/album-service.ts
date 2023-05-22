import { axiosPrivate } from '../../api/interceptors';
import { IAlbum } from '../../types/main-types';
import { IPostAlbum } from '../../types/service-types';
const uuid = require('uuid');

export const albumService = {
  async getAll() {
    const response = await axiosPrivate.get<IAlbum[]>('/api/album');
    console.log(response.data);
    return response;
  },

  async postAlbum(album: FormData) {
    const response = await axiosPrivate.post('/api/album', album);
    return response;
  },

  async deleteAlbum(id: number) {
    const response = await axiosPrivate.delete(`/api/album/${id}`);
    return response;
  },
};
