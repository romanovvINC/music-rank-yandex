import MainCharts from '../../components/charts/main-chart/main-charts-container';
import MainReview from '../../components/main-review/main-review';
import styles from './main-page-section.module.scss';

const MainPageSection = () => {
	return (
		<div className={styles.mainPageSection}>
			<div className={styles.mainPageReviews}>
				<MainReview reviewType='Song' />
        <MainReview reviewType='Album' />
			</div>
			<div className={styles.mainPageCharts}>
        <MainCharts />
			</div>
		</div>
	);
}
  
export default MainPageSection;
  