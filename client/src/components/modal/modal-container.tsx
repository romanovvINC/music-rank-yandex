import cn from 'classnames';
import styles from './modal.module.scss';
import CreateReleaseModal from "./create-release-modal/create-relase-modal";

interface IChartPlace {
  className?: string,
  type: 'registration' | 'login' | 'createRelease'
}

const Modal = ({className, type} : IChartPlace) => {
  return (
    <div className={styles.modal}>
      <CreateReleaseModal className={styles.modalContent} />
    </div>
  );
}

export default Modal;
