import {IAlbum, IArtist, ISong} from "../../types/main-types";

export interface IReleasesSlice {
  albums: IAlbum[],
  songs: ISong[],
  isAlbumsLoading: boolean,
  isSongsLoading: boolean,
  isAlbumLoading: boolean,
  isSongLoading: boolean,
  isModalOpen: boolean,
  acceptModalId: number,
  songsInfoId: number
}