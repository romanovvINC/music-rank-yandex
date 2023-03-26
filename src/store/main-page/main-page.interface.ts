import { Album, Chart, Review, Song } from "../../types/main-types";

export interface IMainPage {
  promo: Album | Song | null,
  reviews: Review[],
  charts: Chart[],
  isLoading: boolean,
  error: ''
}