import cn from 'classnames';
import styles from './releaseModal.module.scss';
import ModalHeader from "../modal-header";
import FormInput from "../../UI/form-input/form-input";
import { useTypedSelector } from '../../../hooks/redux';
import { useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { genreService } from '../../../service/genre-service/artist-service';
import { IAlbum, ICreatedSong, IGenre, ISong } from '../../../types/main-types';
import AddSongForm from './add-song/add-song-form';
import FileInput from '../../UI/file-input/file-input';
import AddSongList from './add-song/add-song-list';
import { dateToString, formatInputDate, timeInputToSecs } from '../../../helpers/date-helpers';

interface IEditReleaseModal {
  className?: string,
  type: 'Edit' | 'Create',
  handleClose: () => void,
  album?: IAlbum
}

const EditReleaseModal = ({ className, handleClose, album, type }: IEditReleaseModal) => {
  const artists = useTypedSelector(state => state.artists.artists);
  const addSrc = require('../../../assets/img/svg/add-icon.png');
  const { getArtists } = useActions();
  
  const [isFormShowed, setIsFormShowed] = useState(false);
  const { createAlbum } = useActions();

  const parseSongs = (album: IAlbum) => {
    let newArr: ICreatedSong[] = [];
    album.songs.forEach((song) => newArr.push({title: song.title, duration: song.duration}))
    return newArr;
  }

  const [allGenres, setAllGenres] = useState<IGenre[]>([]);
  const [albumName, setAlbumName] = useState(album?.title);
  const [artistName, setArtistName] = useState(album?.artist.name);
  const [genreName, setGenreName] = useState(album?.genres[0]);
  const [releaseDate, setReleaseDate] = useState(album?.releaseDate);
  const [bigFile, setBigFile] = useState<File>();
  const [fileSrc, setFileSrc] = useState<string | ArrayBuffer | null>('');
  const [songs, setSongs] = useState<ICreatedSong[]>(album ? parseSongs(album) : []);

  const handleAddAlbumSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const artistId = artists.find((artist) => artist.name === artistName)?.id;
    const genre = allGenres.find((genre) => genre.name === genreName);
    console.log(allGenres);
    console.log(genreName);
    console.log(dateToString(new Date));
    console.log(artistId, bigFile, genreName, genre, releaseDate, albumName, songs);
    if (album && genreName !== '' && genre && releaseDate && albumName && songs !== [] && type === 'Edit') {
      let newSongs = [];
      
      for (let i = 0; i < album.songs.length; i++) {
        if (album.songs[i].duration === songs[i].duration && album.songs[i].title === songs[i].title) {
          newSongs.push(songs[i]);
        } else {
          const editedSong = {
            id: album.songs[i].id,
            duration: songs[i].duration,
            title: songs[i].title
          }
          newSongs.push(editedSong);
        }
      }

      console.log(newSongs);

      const formData = new FormData();
      if (bigFile) {
        formData.append("coverBig", bigFile),
        formData.append("coverSmall", bigFile)
      }
      formData.append("id", `${album.id}`),
      formData.append("artistId", `${artistId}`),
      formData.append("genres", JSON.stringify([genre])),
      formData.append("releaseDate", formatInputDate(releaseDate)),
      formData.append("side", 'A'),
      formData.append("songs", JSON.stringify(songs)),
      formData.append("title", albumName),
      console.log(album.id);
      return;
    }
    if (artistId && bigFile && genreName !== '' && genre && releaseDate && albumName && songs !== []) {
      const formData = new FormData();
      formData.append("artistId", `${artistId}`),
      formData.append("coverBig", bigFile),
      formData.append("coverSmall", bigFile),
      formData.append("genres", JSON.stringify([genre])),
      formData.append("releaseDate", formatInputDate(releaseDate)),
      formData.append("side", 'A'),
      formData.append("songs", JSON.stringify(songs)),
      formData.append("title", albumName),
      createAlbum(formData);
    }
  }

  const addSongHandler = (songName: string, songDuration: string) => {
    const newSong: ICreatedSong = {
      duration: timeInputToSecs(songDuration),
      title: songName
    }
    setSongs([...songs, newSong]); 
  }

  async function getGenres() {
    const {data: genres} = await genreService.getAll();
    setAllGenres(genres);
  }

  useEffect(() => {
    getArtists();
    getGenres();
  }, [])

  const deleteSong = (songPlace: number) => {
    setSongs([...songs.slice(0, songPlace), ...songs.slice(songPlace + 1)]);
  }

  const editSong = (title: string, duration: number, songPlace: number) => {
    const newSong: ICreatedSong = {
      title,
      duration
    }
    setSongs([...songs.slice(0, songPlace), newSong, ...songs.slice(songPlace + 1)]);
  }


  const handleLoadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    var target = event.target;

    if (!FileReader) {
        return;
    }

    if (!target.files?.length) {
        return;
    }

    var fileReader = new FileReader();
    fileReader.onload = function() {
      setFileSrc(fileReader.result);
    }

    fileReader.readAsDataURL(target.files[0]);
    setBigFile(target.files[0]);
}

  return (
    <div className={cn(className, styles.releaseModalContent)}>
      <ModalHeader handleClose={handleClose} title={type === 'Edit' ? 'Редактировать альбом' : 'Добавить альбом'} />
      <div className={styles.releaseModalContainer}>
        <form className={styles.addAlbumForm} onSubmit={(event) => handleAddAlbumSubmit(event)}>
          <FileInput onChange={(event) => handleLoadFile(event)} imgFile={typeof(fileSrc) === 'string' ? fileSrc : ''} />
          <FormInput value={albumName} placeholder="Введите название альбома" onChange={(e) => setAlbumName(e.target.value)} className={styles.realeaseFormInput} />
          <FormInput value={artistName} disabled={type === 'Edit'} list='datalist-artists' onChange={(e) => setArtistName(e.target.value)} className={styles.realeaseFormInput} placeholder="Выберите исполнителя" />
          <datalist id='datalist-artists' className={styles.artistDatalist}>
            {artists.map((artist) => <option value={artist.name}></option>)}
          </datalist>
          <FormInput type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} placeholder="Введите дату релиза альбома" className={styles.realeaseFormInput} />
          <FormInput list='datalist-genres' value={genreName} onChange={(e) => setGenreName(e.target.value)} className={styles.realeaseFormInput} placeholder="Выберите жанр альбома" />
          <datalist id='datalist-genres' className={styles.artistDatalist}>
            {allGenres.map((genre) => <option value={genre.name}></option>)}
          </datalist>
          <hr className={styles.albumSongHr}></hr>
          <div className={styles.formAddSongContainer}>
            {songs.length > 0 || isFormShowed ? <><p>Название композиции</p><p>Длительность</p><p></p></> : <p>Песни пока не добавлены</p>}
            <AddSongList closeHandler={deleteSong} editHandler={editSong} songs={songs} />
            {isFormShowed ? <AddSongForm submitFunc={addSongHandler} closeForm={() => setIsFormShowed(false)} /> : ''}
          </div>
          {isFormShowed ? '' : <button className={styles.addSongButton} onClick={() => setIsFormShowed(true)}><img src={addSrc}></img><p>Добавить песню</p></button>}
          <button className={styles.showSongFormButton} type="submit">{type === 'Create' ? 'Создать альбом' : 'Сохранить'}</button>
        </form>
      </div>
    </div>
  );
}

export default EditReleaseModal;
