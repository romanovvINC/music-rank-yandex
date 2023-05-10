import styles from './modal.module.scss';
import CreateReleaseModal from "./create-release-modal/create-relase-modal";

interface IModalHeader {
  title: string,
  typeImgSrc?: string
}

const ModalHeader = ({title, typeImgSrc} : IModalHeader) => {
  return (
    <div className={styles.modalHeader}>
      <p>{title}</p>
    </div>
  );
}

export default ModalHeader;
