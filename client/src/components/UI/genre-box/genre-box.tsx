import styles from './genre-box.module.scss';

interface IGenreBox { 
	color: string,
  text: string
}

export const GenreBox = ({color, text}: IGenreBox) => {
  console.log(color);
	return (
		<div className={styles.genreBox} style={{backgroundColor: color}}>
      <p>{text}</p>
    </div>
	);
};

export default GenreBox;
