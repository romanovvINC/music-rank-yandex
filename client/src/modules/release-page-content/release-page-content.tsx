import { useEffect, useState } from 'react';
import MainPromo from '../../components/main-promo/main-promo';
import Modal from '../../components/modal/modal-container';
import ReleaseComponent from '../../components/release-component/release-component';
import ReleaseComponentLoading from '../../components/release-component/release-component-loading';
import { useTypedSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/useActions';
import styles from './release-page-content.module.scss';

const addIcon = require('../../assets/img/svg/add-icon.png');

const ReleasePageContent = () => {
  const albums = useTypedSelector((state) => state.releases.albums);
  const isAlbumsLoading = useTypedSelector((state) => state.releases.isAlbumsLoading);
  const isModalShowed = useTypedSelector((state) => state.releases.isModalOpen);

  const {getAlbums, changeModalStatus} = useActions();

  useEffect(() => {
    getAlbums();
  }, []);

  const numOfLoadingComp = 4;

  return (
    <>
      <div className={styles.releaseContentContainer}>
        <div className={styles.releasesContentButtons}>
          <button className={styles.addNewRelease} onClick={() => changeModalStatus(true)}>
            <div className={styles.plusIcon}>
              <img src={addIcon}/>
            </div>
            <p>Добавить новый альбом</p>
          </button>
        </div>
        {isModalShowed ? <Modal type="createRelease" handleClose={() => changeModalStatus(false)}></Modal> : ''}
        {albums.map((album) => <ReleaseComponent album={album} type="Album" />)}
        {isAlbumsLoading ? [...Array(numOfLoadingComp)].map(() => <ReleaseComponentLoading />) : ''}
      </div>
    </>
  );
}

export default ReleasePageContent;
