import { FC } from "react";
import styles from './star-rating.module.scss';
import cn from 'classnames';

const starFull = require('../../../assets/img/svg/star-icon__full.png');
const starHalf = require('../../../assets/img/svg/star-icon__half.png');
const starEmpty = require('../../../assets/img/svg/star-icon__empty.png');

interface iUserHeaderPanel {
	className?: string,
  rating: number
}

const StarComponent:FC<iUserHeaderPanel> = ({className, rating}) => {
  let starCount = Math.ceil(rating); 
  if (rating > 10) starCount = 8;
  let starArray = new Array(5).fill(starEmpty);

  for (let i = 0; i < 5; i++) {
    if ((i + 1) * 2 <= starCount) {
      starArray[i] = starFull;
      continue;
    }
    if (starCount % 2 === 1) {
      starArray[i] = starHalf;
    }
    break;
  }

	return (
		<div className={cn(styles.starContainer, className)}>
      {starArray.map((url) => <img src={url}></img>)}
    </div>
	);
}
  
export default StarComponent;
  