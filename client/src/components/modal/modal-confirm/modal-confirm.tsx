import cn from 'classnames';
import styles from './modal-confirm.module.scss';

interface IModalConfirm {
  handleClose: () => void,
  handleAccept: () => void,
  text: string,
  className?: string
}

const ModalConfirm = ({ handleClose, handleAccept, className, text }: IModalConfirm) => {
  return (
    <div className={cn(className, styles.modalConfirm)}>
      <h1>{text}</h1>
      <div>
        <button onClick={handleAccept}>Да</button>
        <button onClick={handleClose}>Нет</button>
      </div>
    </div>
  );
}

export default ModalConfirm;
