import { Album, Albums, Artists, Reviews, Songs } from "./main-types";

export type AlbumState = Album;

export type UserState = {
	authStatus: boolean,
	avatarUrl: string,
	artists: Artists,
	userName: string,
	albums: Albums,
	songs: Songs,
	reviews: Reviews
}