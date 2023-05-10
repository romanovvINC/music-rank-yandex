import {IArtist} from "../../types/main-types";

export interface IArtistsSlice {
  artists: IArtist[]
  isLoading: boolean,
  error: ''
}