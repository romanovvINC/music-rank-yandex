import cn from 'classnames';
import styles from './add-song.module.scss';
import FormInput from "../../../UI/form-input/form-input";
import { useState } from 'react';

interface IAddSongForm {
  className?: string,
  submitFunc: (songName: string, songDuration: string) => void,
  closeForm: () => void
}

const AddSongForm = ({ className, submitFunc, closeForm }: IAddSongForm) => {
  const [songName, setSongName] = useState('');
  const [songDuration, setSongDuration] = useState('');
  const editSrc = require('../../../../assets/img/svg/edit_white.png');
  const closeSrc = require('../../../../assets/img/svg/x-mark-white.png');
  const addSrc = require('../../../../assets/img/svg/add-icon.png');
  
  const handleFormSubmit = () => {
    
    if (songName !== '' && songDuration !== '') {
      submitFunc(songName, songDuration);
      closeForm();
    }
  }
  
  return (
    <>   
      <FormInput
        form="songForm"
        placeholder="Введите название песни"
        onChange={(e) => setSongName(e.target.value)}
        className={cn(styles.realeaseFormInput)} />
      <FormInput form="songForm" type="time" placeholder="Введите длительность песни" onChange={(e) => setSongDuration(e.target.value)} className={styles.realeaseFormInput} />
      <div className={styles.editSection}>
        <button type="button" onClick={handleFormSubmit}><img src={addSrc}></img></button>
        <button type="button" onClick={closeForm} className={styles.lastTableButton}><img src={closeSrc}></img></button>
      </div>
    </>
  );
}

export default AddSongForm;
