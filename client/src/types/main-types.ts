export interface IReview {
	id: string,
	title: string,
	text: string,
	userId: number,
	releaseDate: Date,
	rating: number,
	numOfViews: number
}

export interface IAlbum {
	id: string,
	title: string,
	artist: string,
	releaseDate: Date,
	cite?: string,
  coverBig: string,
  coverSmall: string,
	genres: string[],
	rating: {
		siteScore: number | null,
		yearPlace: number | null,
		totalPlace: number | null,
		numOfScores: number | null,
	};
	songs: {
		ASide: ISong[],
		BSide?: ISong[],
	};
	reviews: IReview[],
	numOfReviews: number | null
}

export interface ISong {
	id: string,
	title: string,
  releaseDate: Date,
	duration: number,
  cover: string,
	rating: {
		siteScore: number | null,
		yearPlace: number | null,
		totalPlace: number | null,
		numOfScores: number | null,
	},
	albumId?: string
}

export interface IArtist {
	id: number,
	name: string,
	realName: string,
  photo: string,
	birthday: Date
}

export interface IGenre {
  id: number,
  name: string
}

export interface IChart {
  id: string,
  title: string,
  list: (ISong | IArtist | IAlbum)[]
}
