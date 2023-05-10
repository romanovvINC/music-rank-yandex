import cn from 'classnames';
import styles from './releaseModal.module.scss';
import ModalHeader from "../modal-header";
import FormInput from "../../UI/form-input/form-input";
import { useTypedSelector } from '../../../hooks/redux';
import { useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import { artistService } from '../../../service/artist-service/artist-service';
import { genreService } from '../../../service/genre-service/artist-service';
import { IGenre, ISong } from '../../../types/main-types';
import AddSongForm from './add-song-form';
import { IPostGenre, IPostSong } from '../../../types/back-types';

interface ICreateReleaseModal {
  className?: string
}

interface ICreatedSong {
  title: string,
  duration: number
}

const CreateReleaseModal = ({ className }: ICreateReleaseModal) => {
  const artists = useTypedSelector(state => state.artists.artists);
  const { getArtists } = useActions();

  const [allGenres, setAllGenres] = useState<IGenre[]>([]);
  const [isFormShowed, setIsFormShowed] = useState(false);

  const [albumName, setAlbumName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [bigFile, setBigFile] = useState<File>();
  const [smallFile, setSmallFile] = useState<File>();
  const [songs, setSongs] = useState<ICreatedSong[]>([]);

  useEffect(() => {
    getArtists();
    getAllGenres();
  }, []);

  async function getAllGenres() {
    const { data: allGenresData } = await genreService.getAll();
    setAllGenres(allGenresData);
  }

  console.log(artists.length);

  const onBigFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setBigFile(e.target.files[0]);
    };
  }

  const addSongHandler = (songName: string, songDuration: number) => {
    const newSong: ICreatedSong = {
      duration: songDuration,
      title: songName
    }
    setSongs([...songs, newSong]);
  }

  return (
    <div className={cn(className, styles.releaseModalContent)}>
      <ModalHeader title="Добавить релиз" />
      <div className={styles.releaseModalContainer}>
        <form className={styles.addAlbumForm}>
          <FormInput placeholder="Введите название альбома" onChange={(e) => setAlbumName(e.target.value)} className={styles.realeaseFormInput} />
          <FormInput list='datalist-artists' onChange={(e) => setArtistName(e.target.value)} className={styles.realeaseFormInput} placeholder="Выберите исполнителя" />
          <datalist id='datalist-artists' className={styles.artistDatalist}>
            {artists.map((artist) => <option value={artist.name}></option>)}
          </datalist>
          <div className={styles.formAddSongContainer}>
            {isFormShowed ? '' : <button className={styles.showSongFormButton} onClick={() => setIsFormShowed(true)}>Добавить песню</button>}
            {isFormShowed ? <AddSongForm submitFunc={addSongHandler} closeForm={() => setIsFormShowed(false)} /> : ''}
          </div>
          <FormInput type="file" onChange={(e) => onBigFileHandler(e)} placeholder="Загрузите обложку" className={styles.realeaseFormInput} />
          <FormInput type="file" placeholder="Загрузите иконку" className={styles.realeaseFormInput} />
          <FormInput type="date" placeholder="Введите дату релиза альбома" className={styles.realeaseFormInput} />
          <FormInput list='datalist-genres' onChange={(e) => setArtistName(e.target.value)} className={styles.realeaseFormInput} placeholder="Выберите исполнителя" />
          <datalist id='datalist-genres' className={styles.artistDatalist}>
            {allGenres.map((genre) => <option value={genre.name}></option>)}
          </datalist>
        </form>
      </div>
    </div>
  );
}

export default CreateReleaseModal;
