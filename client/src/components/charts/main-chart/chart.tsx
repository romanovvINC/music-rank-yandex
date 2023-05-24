import { useEffect } from "react";
import { useTypedSelector } from "../../../hooks/redux";
import { useActions } from "../../../hooks/useActions";
import { IAlbum } from "../../../types/main-types";
import Underline from "../../UI/underline/underline";
import ChartPlace from "./chart-place";
import styles from './main-chart.module.scss';

const ChartComponent = () => {
  const { getAlbums } = useActions();
  const albums = useTypedSelector((state) => state.releases.albums);

  useEffect(() => {
    getAlbums();
  }, [])

return (
		<div className={styles.chartComponent}>
      <h1>Главные альбомы недели:</h1>
      <Underline color="Red" height={2} className={styles.chartsUnderline}/>
      {albums.map((album, key) => <ChartPlace artist={album.artist} coverUrl={album.coverSmall} place={key + 1} pubDate={album.releaseDate} title={album.title} />)}
		</div>
	);
}
  
export default ChartComponent;
  