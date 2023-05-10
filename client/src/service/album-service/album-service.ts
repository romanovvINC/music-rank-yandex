import { axiosPrivate } from '../../api/interceptors';
import { IPostAlbum } from '../../types/service-types';
const uuid = require('uuid');

export const albumService = {
  async getAll() {
    const response = await axiosPrivate.get('/api/album');
    return response;
  },

  async postAlbum(album: IPostAlbum) {
    const response = await axiosPrivate.post('/api/album', album);
    return response;
  },
};
