import ChartComponent from "./chart";
import styles from './main-chart.module.scss';

const chartIcon = require('../../../assets/img/svg/stats-icon__white.png');

const MainCharts = () => {
  const chartsTitle = 'Чарты 21.03.2023';

	return (
		<div className={styles.chartsContainer}>
			<div className={styles.chartsTitle}>
				<img src={chartIcon}></img>
				<h1>{chartsTitle}</h1>
        <p></p>
			</div>	
			<div className={styles.chartsContent}>
        <ChartComponent />
			</div>
		</div>
	);
}
  
export default MainCharts;
  