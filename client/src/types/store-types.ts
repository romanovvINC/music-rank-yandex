import { IAlbum, IArtist, IReview, ISong } from "./main-types";

export type UserState = {
	authStatus: boolean,
	avatarUrl: string,
	artists: IArtist[],
	userName: string,
	albums: IAlbum[],
	songs: ISong[],
	reviews: IReview[]
}