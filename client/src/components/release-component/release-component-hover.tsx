import { useState } from 'react';
import styles from './release-component.module.scss';

interface IReleaseComponentHover {
  isSongsOpened: boolean,
  setIsEditModalShowed: (isShow: boolean) => void,
  changeAcceptModalId: (id: string) => void
}

const editIcon = require('../../assets/img/svg/edit_white.png');
const deleteIcon = require('../../assets/img/svg/x-mark-white.png');

const ReleaseComponentHover = ({isSongsOpened, setIsEditModalShowed, changeAcceptModalId}: IReleaseComponentHover) => {
  const [isEditShowed, setIsEditShowed] = useState<boolean>(false);
  
  const inHandler = () => {
    if (!isSongsOpened) {
      setIsEditShowed(true)
    }
  }

  const outHandler = () => {
    setIsEditShowed(false)
  }

  return (
    <div className={styles.releaseComponentEditContainer} onMouseLeave={outHandler} onMouseEnter={inHandler}>
      <div className={styles.releaseComponentEdit} style={{ display: `${isEditShowed ? '' : 'none'}` }}>
      <button onClick={setIsEditModalShowed} title='Редактировать альбом'>
        <img className={styles.releaseCompoentEdit} src={editIcon} />
      </button>
      <button onClick={changeAcceptModalId} title='Удалить альбом'>
        <img className={styles.releaseCompoentDelete} src={deleteIcon} />
      </button>
    </div>
  </div>
  );
}

export default ReleaseComponentHover;
