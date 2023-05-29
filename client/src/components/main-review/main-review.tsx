import Underline from "../UI/underline/underline";
import StarComponent from "../UI/star-rating/star-rating";
import styles from './main-review.module.scss';
import { IReview } from "../../types/main-types";
import { API_URL } from "../../constants/server-const";

const albumIcon = require('../../assets/img/svg/album-icon__white.png');
const songIcon = require('../../assets/img/svg/note-icon__white.png');
const avatarIcon = require('../../assets/img/svg/avatar-icon__small.jpg');
const viewIcon = require('../../assets/img/svg/view-icon__white.png');


interface IMainReview {
	reviewType: 'Album' | 'Song',
  review: IReview,
	width?: string
  }

const MainReview = ({reviewType, review, width}: IMainReview) => {
  const imgPath = `${API_URL}/${review.coverSrc}`;
	let reviewTextEdited = review.text;
	let reviewTextSize = 12;
  let reviewIcon = '';

  switch(reviewType) {
    case('Album'):
      reviewIcon = albumIcon;
      break;
    case('Song'):
      reviewIcon = songIcon;
      break;
  }

	if (reviewTextEdited.length > 410) {
		reviewTextEdited = reviewTextEdited.substr(0, 410) + '...'
	} else {
		reviewTextSize = (1000 - reviewTextEdited.length) / 52;
	}
	return (
		<div className={styles.reviewContainer}>
			<div className={styles.reviewtitle}>
				<img src={reviewIcon}></img>
				<h1>Рецензия на альбом {review.artist.name} - <strong>{review.album.title}</strong></h1>
			</div>	
			<div className={styles.reviewContent}>
				<h1>{review.title}</h1>
				<Underline color="Red" height={2} width={520}/>
				<div className={styles.releaseInfo}>
					<img src={imgPath}></img>
					<p style={{fontSize: `${reviewTextSize}px`}}>{reviewTextEdited}</p>
				</div>
			</div>
			<div className={styles.reviewInfo}>
        <div className={styles.reviewUserInfo}>
          <img src={avatarIcon}></img>
          <p>{review.user.name}</p>
        </div>
        <div className={styles.reviewStatsInfo}>
          <p>15.02.2023 17:15</p>
          <div className={styles.viewCount}>
            <img src={viewIcon}></img>
            <p>{review.numOfViews}</p>
          </div>
        </div>
        <StarComponent rating={review.rating} />
			</div>
		</div>
	);
}
  
export default MainReview;
  