export interface Review {
	id: string;
	title: string;
	text: string;
	userId: number;
	releaseDate: Date;
	rating: number;
	numOfViews: number;
}

export interface Album {
	id: string,
	title: string;
	artist: string;
	realaseDate: Date;
	cite?: string;
  coverSrc: string;
	genres: string[];
	rating: {
		siteScore: number | null;
		yearPlace: number | null;
		totalPlace: number | null;
		numOfScores: number | null;	
	};
	songs: {
		ASide: Song[]
		BSide?: Song[]
	};
	reviews: Review[];
	numOfReviews: number | null;
}

export interface Song {
	id: string,
	title: string,
	duration: number,
	rating: number,
	album?: string
}

export interface Artist {
	id: string,
	name: string,
	realName: string,
	members?: Artist[],
	birthday: Date
}

export interface Chart {
  id: string,
  title: string,
  list: (Song | Artist | Album)[]
}
