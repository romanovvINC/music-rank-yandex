export type Review = {
	id: number;
	title: string;
	text: string;
	userId: number;
	releaseDate: Date;
	rating: number;
	numOfViews: number;
}

export type Reviews = Review[];

export type Album = {
	id: number,
	title: string;
	artist: string;
	realaseDate: Date | null;
	cite: string;
	genres: string[];
	rating: {
		siteScore: number | null;
		userScore: number | null;
		yearPlace: number | null;
		totalPlace: number | null;
		numOfScores: number | null;	
	};
	songs: {
		ASide: Song[]
		BSide?: Song[]
	};
	reviews: Reviews;
	numOfReviews: number | null;
}

export type Albums = Album[];

export type Song = {
	id: number,
	title: string,
	duration: number,
	rating: number,
	album?: string
}

export type Songs = Song[];

export type Artist = {
	id: number,
	name: string,
	realName: string,
	members?: Artist[],
	birthday: Date
}

export type Artists = Artist[];