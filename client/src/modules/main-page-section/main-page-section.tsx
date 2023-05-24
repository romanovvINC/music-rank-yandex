import MainCharts from '../../components/charts/main-chart/main-charts-container';
import MainReview from '../../components/main-review/main-review';
import styles from './main-page-section.module.scss';
import { reviewMocks } from '../../helpers/mocks/reviews';

const MainPageSection = () => {
	return (
		<div className={styles.mainPageSection}>
			<div className={styles.mainPageReviews}>
				{reviewMocks.map((review) => <MainReview reviewType='Album' review={review}/>) }
			</div>
			<div className={styles.mainPageCharts}>
        <MainCharts />
			</div>
		</div>
	);
}
  
export default MainPageSection;
  