import { Album, Artist, Review, Song } from "./main-types";

export type UserState = {
	authStatus: boolean,
	avatarUrl: string,
	artists: Artist[],
	userName: string,
	albums: Album[],
	songs: Song[],
	reviews: Review[]
}