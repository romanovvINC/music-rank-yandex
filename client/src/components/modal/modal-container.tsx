import cn from 'classnames';
import styles from './modal.module.scss';
import CreateReleaseModal from "./create-release-modal/create-relase-modal";
import ModalConfirm from './modal-confirm/modal-confirm';
import EditReleaseModal from './create-release-modal/create-relase-modal';
import { IAlbum } from '../../types/main-types';

interface IChartPlace {
  className?: string,
  text?: string,
  type: 'registration' | 'login' | 'createRelease' | 'confirm' | 'editRelease',
  album?: IAlbum,
  handleClose: () => void,
  handleAccept?: () => void
}

const Modal = ({ className, type, text, album, handleClose, handleAccept }: IChartPlace) => {
  switch (type) {
    case 'createRelease':
      return (
        <div className={styles.modal}>
          <EditReleaseModal type='Create' handleClose={handleClose} className={styles.modalContent} />
        </div>
      );
    case 'confirm':
      if (!handleAccept || !text) return <></>;
      return (
        <div className={styles.modal}>
          <ModalConfirm handleAccept={handleAccept} handleClose={handleClose} text={text} />
        </div>
      );
    case 'editRelease':
      return (
        <div className={styles.modal}>
          <EditReleaseModal type='Edit' handleClose={handleClose} className={styles.modalContent} album={album}/>
        </div>
      );
    case 'registration':
      return <></>;
    case 'login':
      return <></>;
    default:
      return <></>;
  }
  return <></>;
}

export default Modal;
