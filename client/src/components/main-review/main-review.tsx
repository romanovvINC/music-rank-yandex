import { stat } from "fs";
import { url } from "inspector";
import { FC } from "react";
import Underline from "../UI/underline/underline";
import StarComponent from "../UI/star-rating/star-rating";
import styles from './main-review.module.scss';
const promo = require('../../assets/img/mocks/to-pimp-a-butterfly.jpg');
const albumIcon = require('../../assets/img/svg/album-icon__white.png');
const songIcon = require('../../assets/img/svg/note-icon__white.png');
const avatarIcon = require('../../assets/img/svg/avatar-icon__small.jpg');
const viewIcon = require('../../assets/img/svg/view-icon__white.png');

interface IMainReview {
	className?: string,
	reviewType: 'Album' | 'Song',
	width?: string
  }

const MainReview:FC<IMainReview> = ({className, reviewType, width}) => {
	const reviewText = 'Одно из главных музыкальных событий в хип-хопе (и музыкальных событий года вовсе) обернулось далеко не простым сборником разудалых рэп-боевиков, а хаотичным манифестом к своей личности и прошлому от одного из самых примечательных хип-хоп артистов современности (Канье, подвинься) открыл для себя маэстро Кендрика ещё в 2014 году, благодаря завирусившемуся у нас треку Backseat Freestyle c «good kid, m.A.A.d city». Альбом стал одним из самых выдаюшихся релизов своего времени';
	let reviewTextEdited = reviewText;
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
				<h1>Рецензия на альбом Kendrick Lamar - <strong>To Pimp A Butterfly</strong></h1>
			</div>	
			<div className={styles.reviewContent}>
				<h1>Маленький успех главного релиза года</h1>
				<Underline color="Red" height={2} width={520}/>
				<div className={styles.releaseInfo}>
					<img src={promo}></img>
					<p style={{fontSize: `${reviewTextSize}px`}}>{reviewTextEdited}</p>
				</div>
			</div>
			<div className={styles.reviewInfo}>
        <div className={styles.reviewUserInfo}>
          <img src={avatarIcon}></img>
          <p>tylerjoseph</p>
        </div>
        <div className={styles.reviewStatsInfo}>
          <p>15.02.2023 17:15</p>
          <div className={styles.viewCount}>
            <img src={viewIcon}></img>
            <p>51 209</p>
          </div>
        </div>
        <StarComponent rating={9} />
			</div>
		</div>
	);
}
  
export default MainReview;
  