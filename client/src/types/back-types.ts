import { IGenre, ISong } from "./main-types";

export interface IPostSong extends Omit<ISong, "id" | "rating" | "albumId"> {}

export interface IPostGenre extends Omit<IGenre, "id"> {}