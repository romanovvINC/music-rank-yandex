import { url } from "inspector";
import { FC } from "react";
import Underline from "../UI/underline/underline";
import styles from './main-promo.module.scss';

const mainBackground = require('../../assets/img/bg/main-bg.png');
const promo = require('../../assets/img/mocks/album-drake.jpg');
const albumIcon = require('../../assets/img/svg/album-icon__white.png');

interface iMainPromo {
	className?: string
  }

const MainPromo:FC<iMainPromo> = ({className}) => {
	const albumName = 'Scorpion';
	const artistName = 'Drake';
	const cite = 'Kiki do you love me? Are you riding? Say youll never ever leave from beside me';
	return (
		<div className={styles.mainPromo} style={{backgroundImage: `url(${mainBackground})`}}>
			<div className={styles.mainPromoContainer}>
				<img src={promo}></img>
				<div className={styles.promoInfo}>
					<img src={albumIcon}></img>
					<div>
						<div className={styles.mainInfoBlock}>
							<h1>{albumName}</h1>
							<Underline color="White" height={2} width={albumName.length * 21} margin={3}/>
							<p>{artistName}</p>
						</div>
						<div className={styles.additionalInfoBlock}>
							<cite>«{cite}»</cite>
							<p>2018-06-29</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
  
export default MainPromo;
  