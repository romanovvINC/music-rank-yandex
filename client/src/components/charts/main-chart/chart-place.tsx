import Underline from "../../UI/underline/underline";
import styles from './chart-place.module.scss';
const chartIcon = require('../../../assets/img/svg/stats-icon__white.png');

interface IChartPlace {
  title: string,
  artist: {
    id: string,
    name: string
  },
  pubDate: string,
  coverUrl: string,
  place: number
}

const ChartPlace = (album: IChartPlace) => {
  const  {title, artist, pubDate, coverUrl, place } = album;
  console.log(album);
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
  const imgPath = require(`../../../../../server/static/${coverUrl}`);
  console.log(imgPath);
  
return (
		<div className={styles.chartPlace}>
      <img src={imgPath}></img>
      <span className={styles.chartPlaceNum} style={{backgroundColor: `${medalColor}`}}><p>{place}</p></span>
      <div className={styles.chartPlaceInfoContainer}>
        <div className={styles.releaseMainInfo}>
          <h1 className={styles.placeReleaseTitle}>{title}</h1>
          <Underline width={160} height={1} color={"White"}/>
          <p className={styles.placeArtistName}>{artist.name}</p>
        </div>
        <p className={styles.placeReleaseDate}>4 February 2022</p>
      </div>
		</div>
	);
}
  
export default ChartPlace;
  