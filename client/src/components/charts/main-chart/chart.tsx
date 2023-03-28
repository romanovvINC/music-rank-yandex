import { stat } from "fs";
import { url } from "inspector";
import { FC } from "react";
import { Album } from "../../../types/main-types";
import Underline from "../../../UI/underline/underline";
import ChartPlace from "./chart-place";
import styles from './main-chart.module.scss';
const promo = require('../../../assets/img/mocks/to-pimp-a-butterfly.jpg');
const chartIcon = require('../../../assets/img/svg/stats-icon__white.png');

const chartMock: Album = {
  artist: 'Radiohead',
  genres: ['Art Rock', 'Alt Rock', 'Indie Rock', 'Post-Punk'],
  id: 'askdkl;sakdlsldas',
  numOfReviews: 720,
  rating: {
    numOfScores: 6872,
    siteScore: 91,
    totalPlace: 291,
    yearPlace: 13
  },
  realaseDate: new Date,
  coverSrc: 'asdasd',
  reviews: [],
  songs: {
    ASide: []
  },
  title: 'Hail To The Thief'
}

const ChartComponent = () => {
  let mockArray = new Array(7);
  mockArray.fill(chartMock);

return (
		<div className={styles.chartComponent}>
      <h1>Главные альбомы недели:</h1>
      <Underline color="Red" height={2} className={styles.chartsUnderline}/>
      {mockArray.map((release, key) => <ChartPlace artist={release.artist} coverUrl={promo} place={key + 1} pubDate={release.realaseDate} title={release.title} />)}
		</div>
	);
}
  
export default ChartComponent;
  