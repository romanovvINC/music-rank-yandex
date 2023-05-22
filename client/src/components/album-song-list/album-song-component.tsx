import { secsToMinsecs } from '../../helpers/date-helpers';
import styles from './album-song-list.module.scss';

interface IAlbumSongComponent {
  place: number,
  title: string,
  duration: number,
  rating: number | null,
  color: string
}

const AlbumSongComponent = ({ place, title, duration, rating, color}: IAlbumSongComponent) => {
  return (
    <>
      <p className={styles.albumsongPlace}>{place}</p>
      <p className={styles.albumsongTitle}>{title}</p>
      <p className={styles.albumsongDuration}>
        {secsToMinsecs(duration)}
      </p>
      <div className={styles.albumSongRating} style={{backgroundColor: `${color === 'default' ? '#ffffff' : color}`}}>
        <p>{rating ? rating : '0.00'}</p>
      </div> 
    </>
  );
}

export default AlbumSongComponent;
