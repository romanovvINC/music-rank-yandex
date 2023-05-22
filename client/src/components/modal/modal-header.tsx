import styles from './modal.module.scss';
import CreateReleaseModal from "./create-release-modal/create-relase-modal";

const xMarkSrc = require('../../assets/img/svg/x-mark-grey.png');

interface IModalHeader {
  title: string,
  handleClose: () => void
}

const ModalHeader = ({title, handleClose} : IModalHeader) => {
  return (
    <div className={styles.modalHeader}>
      <p>{title}</p>
      <button onClick={handleClose} type="button"><img src={xMarkSrc}></img></button>
    </div>
  );
}

export default ModalHeader;
