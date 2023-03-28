import Header from '../../components/header/header';
import MainPageContent from '../../modules/main-page-content/main-page-content';
import styles from './main-page.module.scss';
const mainBackground = require('../../assets/img/bg/main-bg.png');

const MainPage = () => {
	return (
		<>
			<Header />
			<MainPageContent />
		</>
	);
}
  
export default MainPage;
  