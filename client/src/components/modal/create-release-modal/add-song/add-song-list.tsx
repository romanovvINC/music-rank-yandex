import styles from './add-song.module.scss';
import FormInput from "../../../UI/form-input/form-input";
import React from 'react';
import { ICreatedSong } from '../../../../types/main-types';
import AddAlbumSongComponent from './add-album-song-component';

interface IAddSongList {
  songs: ICreatedSong[],
  editHandler: (title: string, duration: number, songPlace: number) => void,
  closeHandler: (songPlace: number) => void
}

const AddSongList = ({songs, editHandler, closeHandler}: IAddSongList) => {
  return (
    <>
      {songs.map((song, key) => <AddAlbumSongComponent closeHandler={closeHandler} editHandler={editHandler} song={song} index={key + 1} />)}
    </>
  );
}

export default React.memo(AddSongList);
