import styles from './add-song.module.scss';
import React, { useState } from 'react';
import cn from 'classnames'
import { ICreatedSong } from '../../../../types/main-types';
import { timeInputToSecs } from '../../../../helpers/date-helpers';

interface IAddAlbumSong {
  song: ICreatedSong,
  index: number,
  editHandler: (title: string, duration: number, songPlace: number) => void,
  closeHandler: (songPlace: number) => void
}

const editSrc = require('../../../../assets/img/svg/edit_white.png');
const closeSrc = require('../../../../assets/img/svg/x-mark-white.png');
const addSrc = require('../../../../assets/img/svg/add-icon.png');

const AddAlbumSongComponent = ({ song, index, editHandler, closeHandler }: IAddAlbumSong) => {
  const [title, setTitle] = useState(song.title);
  const [duration, setDuration] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) return (
    <>
      <input className={cn(styles.songAlbumTitle, styles.songAlbum)} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className={cn(styles.songAlbum, styles.songAlbumDuration)} type="time" onChange={e => setDuration(timeInputToSecs(e.target.value))} />
      <div className={styles.editSection}>
        <button onClick={() => {
          editHandler(title, duration, index - 1);
          setIsEditing(false);
        }}><img src={addSrc}></img></button>
        <button onClick={() => {
          closeHandler(index - 1);
          setIsEditing(false);
        }}><img src={closeSrc}></img></button>
      </div>
    </>
  )
  return (
    <>
      <div className={cn(styles.songAlbumTitle, styles.songAlbum)}><span>{index}.</span>&emsp;&emsp;&emsp;{song.title}</div>
      <div className={cn(styles.songAlbum, styles.songAlbumDuration)}>{song.duration}</div>
      <div className={styles.editSection}>
        <button onClick={() => setIsEditing(true)} className={styles.lastTableButton}><img src={editSrc}></img></button>
      </div>
    </>
  );
}

export default AddAlbumSongComponent;
