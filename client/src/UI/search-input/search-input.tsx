import { FC } from 'react';
import styles from './search-input.module.scss';
import 'classnames';
const searchIcon = require('../../assets/img/svg/search-icon__white.png');

interface ISearchInput { 
	classname?: string;
}

export const SearchInput:FC<ISearchInput> = () => {
	return (
		<div className={styles.inputContainer}>
			<input type="search"className={styles.searchInput} />
			<label className={styles.searchInputLabel}>
				<img src={searchIcon} />
			</label>
		</ div>
	);
};
