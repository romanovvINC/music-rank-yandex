import React, { useState } from 'react'
import { genreColors } from '../../constants/genres-colors'
import { useTypedSelector } from '../../hooks/redux'
import { useActions } from '../../hooks/useActions'
import { IAlbum } from '../../types/main-types'
import AlbumSongList from '../album-song-list/album-song-list'
import Modal from '../modal/modal-container'
import GenreBox from '../UI/genre-box/genre-box'
import RatingBox from '../UI/rating-box/rating-box'
import ReleaseComponentHover from './release-component-hover'
import styles from './release-component.module.scss'

interface IReleaseComponent {
  type: 'Album' | 'Song',
  album: IAlbum
}

const ReleaseComponent = ({ album, type }: IReleaseComponent) => {
  const songsInfoId = useTypedSelector((state) => state.releases.songsInfoId)
  const acceptModalId = useTypedSelector((state) => state.releases.acceptModalId)
  const { setShowSongsId, changeAcceptModalId, deleteAlbum } = useActions()

  const [isEditShowed, setIsEditShowed] = useState(false)
  const [isEditModalShowed, setIsEditModalShowed] = useState(false);

  const id = Number(album.id)
  let imgPath = ''
  let noAlbumSrc = 'no-album-cover.jpg'

  const handleShowSongs = () => {
    setIsEditShowed(false)
    setShowSongsId(id)
  }

  try {
    imgPath = require(`../../../../server/static/${album.coverBig}`)
  } catch (e) {
    imgPath = require(`../../../../server/static/${noAlbumSrc}`)
  }
  return (
    <div className={styles.releaseComponentContainer}>
      <img src={imgPath}></img>
      <div className={styles.releaseComponentMainInfo}>
        <div className={styles.releaseComponentMainInfoNonGenre}>
          <h1 className={styles.releaseComponentTitle}>{album.title}</h1>
          <h2 className={styles.releaseComponentArtist}>{album.artist.name}</h2>
          <div className={styles.releaseDateAndSongs}>
            <time>{album.releaseDate}</time>
            {songsInfoId === id ? '' : <button className={styles.showSongsbutton} title='Показать полный список композиций' onClick={handleShowSongs}>{album.songs.length} композиций</button>}
          </div>
        </div>
        <div className={styles.releaseGenresCotainer}>
          {album.genres.map((genre, key) => <GenreBox color={genreColors[key]} text={genre} />)}
          {album.genres.map((genre, key) => <GenreBox color={genreColors[key + 1]} text={genre} />)}
          {album.genres.map((genre, key) => <GenreBox color={genreColors[key + 2]} text={genre} />)}
          {album.genres.map((genre, key) => <GenreBox color={genreColors[key + 3]} text={genre} />)}
          {album.genres.map((genre, key) => <GenreBox color={genreColors[key + 4]} text={genre} />)}
          {album.genres.map((genre, key) => <GenreBox color={genreColors[key + 5]} text={genre} />)}
        </div>
      </div>
      <div className={styles.releaseComponentRatingContainer}>
        <div className={styles.mainRatingFlex}>
          <RatingBox rating={3.59} type="Site" />
          <p>оценка сайта</p>
        </div>
        <div className={styles.mainRatingFlex}>
          <RatingBox rating={4.12} type="User" />
          <p>ваша оценка</p>
        </div>
        <p><span>#2319</span> за всё время</p>
        <p><span>#121</span> в {album.releaseDate.split('-')[2]}</p>
      </div>
      {songsInfoId === id ? <div className={styles.releaseComponentSongs}><AlbumSongList songs={album.songs} mainColor='default' /></div> : ''}
      {songsInfoId === id ? <button className={styles.hideSongsButton} onClick={() => setShowSongsId(-1)}>Скрыть</button> : ''}
      <ReleaseComponentHover
        setIsEditModalShowed={() => setIsEditModalShowed(true)}
        changeAcceptModalId={() => changeAcceptModalId(id)}
        isSongsOpened={songsInfoId === id}/>
      {isEditModalShowed ? <Modal album={album} type='editRelease' handleClose={() => setIsEditModalShowed(false)} /> : ''}
      {acceptModalId === id ? <Modal type="confirm" handleClose={() => changeAcceptModalId(-1)} handleAccept={() => deleteAlbum(id)} text={`Вы действительно хотите удалить альбом ${album.title}?`} /> : ''}
    </div>
  )
}

export default ReleaseComponent;
