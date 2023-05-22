import React, { InputHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './file-input.module.scss';
import 'classnames';

interface IFileInput extends InputHTMLAttributes<HTMLInputElement> {
  imgFile: string
}

const FileInput = React.forwardRef<HTMLInputElement, IFileInput>(({ className, imgFile, ...rest }, ref) => {
  console.log(imgFile);
  return (
    <label className={styles.fileInput}>
      <input ref={ref} type="file" name="file" className={cn(styles.formInput, className)} {...rest} />
      <img className={styles.loadedImage} style={{display: `${imgFile === '' ? 'none' : 'block'}`}}src={imgFile ? imgFile : ''}></img>
      <span className={styles.backgroundFileSpan}></span>
      <span className={styles.fileImage}></span>
    </label>
  );
});

export default FileInput;

