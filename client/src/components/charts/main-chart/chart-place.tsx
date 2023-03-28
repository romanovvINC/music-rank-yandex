import { stat } from "fs";
import { url } from "inspector";
import { FC } from "react";
import Underline from "../../../UI/underline/underline";
import styles from './chart-place.module.scss';
const promo = require('../../../assets/img/mocks/to-pimp-a-butterfly.jpg');
const chartIcon = require('../../../assets/img/svg/stats-icon__white.png');

interface IChartPlace {
  title: string,
  artist: string,
  pubDate: Date,
  coverUrl: string,
  place: number
}

const ChartPlace = (album: IChartPlace) => {
  const  {title, artist, pubDate, coverUrl, place } = album;
  let medalColor = ""
  switch (place) {
    case(1):
      medalColor = "#FFD600";
      break;
    case(2):
      medalColor = "#9CBDEE";
      break;
    case(3):
      medalColor = "#CD7F32";
      break;
    default:
      medalColor = "#CCCCCC";
      break;
  }
return (
		<div className={styles.chartPlace}>
      <img src={coverUrl}></img>
      <span className={styles.chartPlaceNum} style={{backgroundColor: `${medalColor}`}}><p>{place}</p></span>
      <div className={styles.chartPlaceInfoContainer}>
        <div className={styles.releaseMainInfo}>
          <h1 className={styles.placeReleaseTitle}>{title}</h1>
          <Underline width={160} height={1} color={"White"}/>
          <p className={styles.placeArtistName}>{artist}</p>
        </div>
        <p className={styles.placeReleaseDate}>4 February 2022</p>
      </div>
		</div>
	);
}
  
export default ChartPlace;
  