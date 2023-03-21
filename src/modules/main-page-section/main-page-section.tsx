import Header from '../../components/header/header';
import MainPromo from '../../components/main-promo/main-promo';
import MainReview from '../../components/main-review/main-review';
import styles from './main-page-section.module.scss';

const MainPageSection = () => {
	return (
		<div className={styles.mainPageSection}>
			<div className={styles.mainPageReviews}>
				<MainReview reviewType='Album' />
        <MainReview reviewType='Song' />
			</div>
			<div className={styles.mainPageCharts}>
					
			</div>
		</div>
	);
}
  
export default MainPageSection;
  