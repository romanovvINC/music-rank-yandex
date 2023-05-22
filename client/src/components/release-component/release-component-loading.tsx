import GenreBox from '../UI/genre-box/genre-box';
import RatingBox from '../UI/rating-box/rating-box';
import styles from './release-component.module.scss';
import cn from 'classnames';

const ReleaseComponentLoading = () => {
  return (
    <div className={styles.releaseComponentContainer}>
      <div className={cn(styles.blink, styles.imgDivLoading)}></div>
      <div className={styles.releaseComponentMainInfo}>
        <div className={styles.releaseComponentMainInfoNonGenre}>
          <div className={cn(styles.divtext, styles.blink)}></div>
          <div className={cn(styles.blink, styles.divMediumtext)}></div>
          <div className={cn(styles.blink, styles.divMediumtext)}></div>
        </div>
        <div className={styles.releaseGenresCotainer}>
          <div className={cn(styles.blink, styles.divSmallText)}></div>
          <div className={cn(styles.blink, styles.divSmallText)}></div>
          <div className={cn(styles.blink, styles.divSmallText)}></div>
          <div className={cn(styles.blink, styles.divSmallText)}></div>
        </div>
      </div>
      <div className={styles.releaseComponentRatingContainer}>
        <div className={cn(styles.blink, styles.divSmallText)}></div>
        <div className={cn(styles.blink, styles.divSmallText)}></div>
        <div className={cn(styles.blink, styles.divSmallText)}></div>
        <div className={cn(styles.blink, styles.divSmallText)}></div>
      </div>
    </div>

  );
}

export default ReleaseComponentLoading;
