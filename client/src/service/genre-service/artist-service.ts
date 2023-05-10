import { axiosPrivate } from '../../api/interceptors';

export const genreService = {
  async getAll() {
    const response = await axiosPrivate.get('/api/genre');
    return response;
  },
};
