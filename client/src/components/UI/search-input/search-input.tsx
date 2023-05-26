import { FC } from 'react';
import styles from './search-input.module.scss';
import cn from 'classnames';
import 'classnames';
const searchIcon = require('../../../assets/img/svg/search-icon__white.png');

interface ISearchInput { 
	classname?: string;
}

export const SearchInput:FC<ISearchInput> = ({classname}) => {
	return (
		<div className={cn(styles.inputContainer, classname)}>
			<input type="search"className={styles.searchInput} />
			<label className={styles.searchInputLabel}>
				<img src={searchIcon} />
			</label>
		</ div>
	);
};
