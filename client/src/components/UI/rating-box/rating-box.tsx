import styles from './rating-box.module.scss';
import cn from 'classnames';

interface IRatingBox { 
	type: 'User' | 'Site',
  rating: number
}

export const RatingBox = ({type, rating}: IRatingBox) => {
	return (
		<div className={cn(styles.ratingBox, {
      [styles.ratingBoxUser]: type === 'User',
      [styles.ratingBoxSite]: type === 'Site',
      })}>
      <p>{rating}</p>
    </div>
	);
};

export default RatingBox;
