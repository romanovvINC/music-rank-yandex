import { secsToMinsecs } from '../../helpers/date-helpers';
import { IAlbumSong } from '../../types/main-types';
import AlbumSongComponent from './album-song-component';
import styles from './album-song-list.module.scss';

interface IAlbumSongList {
  songs: IAlbumSong[],
  mainColor: string | 'default'
}

const placeHeaderSrc = require('../../assets/img/svg/place-header.png');

const AlbumSongList = ({ songs, mainColor }: IAlbumSongList) => {
  let duration = 0;
  let songsCount = 0;
  songs.forEach((song) => {
    duration += song.duration
    songsCount += 1;
  });
  console.log(duration);

  return (
    <div className={styles.albumSongList}>
      <div className={styles.albumSongTableTitle}><img src={placeHeaderSrc} /></div>
      <p className={styles.albumSongTableTitle}>Название</p>
      <p className={styles.albumSongTableTitle}>Длительность</p>
      <p className={styles.albumSongTableTitle}>Рейтинг</p>
      {songs.map((song, key) => <AlbumSongComponent duration={song.duration} place={key + 1} rating={song.rating.siteScore} title={song.title} color={mainColor}/>)}
      <div className={styles.albumSongTotalInfo}>
        <p>Длительность <span>{secsToMinsecs(duration)}</span></p>
        <p><span>{songsCount}</span> аудиозаписей</p>
      </div>
    </div>
  );
}

export default AlbumSongList;
