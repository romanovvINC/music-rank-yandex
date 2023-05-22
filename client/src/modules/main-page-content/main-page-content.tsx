import { useState } from 'react';
import MainPromo from '../../components/main-promo/main-promo';
import MainPageSection from '../main-page-section/main-page-section';
import styles from './main-page-content.module.scss';

const MainPageContent = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <MainPromo />
        <MainPageSection />
      </div>
    </>
  );
}

export default MainPageContent;
