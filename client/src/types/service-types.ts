import { IGenre } from "./main-types"

export interface IPostAlbum {
  title: string,
  releaseDate: string,
  artistId: number,
  songs: IPostAlbumSong[],
  genres: IGenre[],
  side: string,
  coverBig: File,
  coverSmall: File
}

export interface IPostAlbumSong {
  title: string,
  duration: number
}
