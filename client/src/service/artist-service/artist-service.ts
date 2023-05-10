import { axiosPrivate } from '../../api/interceptors';
const uuid = require('uuid');

export const artistService = {
  async getAll() {
    const response = await axiosPrivate.get('/api/artist');
    return response;
  },
};
