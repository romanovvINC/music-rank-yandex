import cn from 'classnames';
import styles from './releaseModal.module.scss';
import FormInput from "../../UI/form-input/form-input";
import { useState } from 'react';

interface IAddSongForm {
  className?: string,
  submitFunc: (songName: string, songDuration: number) => void,
  closeForm: () => void
}

const AddSongForm = ({ className, submitFunc, closeForm }: IAddSongForm) => {
  const [songName, setSongName] = useState('');
  const [songDuration, setSongDuration] = useState(0);
  
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (songName !== '' && songDuration !== 0) {
      console.log("asdasdsadasdsadsa");
      submitFunc(songName, songDuration);
    }
  }

  return (
    <form className={styles.addAlbumSongForm} onSubmit={(event) => handleFormSubmit(event)}>
      <FormInput placeholder="Введите название песни" onChange={(e) => setSongName(e.target.value)} className={styles.realeaseFormInput} />
      <FormInput type="number" placeholder="Введите длительность песни" onChange={(e) => setSongDuration(Number(e.target.value))} className={styles.realeaseFormInput} />
      <button type="submit">Добавить</button>
      <button type='button' onClick={() => closeForm()}>Закрыть</button>
      <button type='button'>Пенис</button>
    </form>
  );
}

export default AddSongForm;
