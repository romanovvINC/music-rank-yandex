import Header from '../../components/header/header';
import MainPromo from '../../components/main-promo/main-promo';
import styles from './main-page-content.module.scss';

const MainPageContent = () => {
	return (
		<>
			<div className={styles.mainContainer}>
				<MainPromo />
			</div>
		</>
	);
}
  
export default MainPageContent;
  