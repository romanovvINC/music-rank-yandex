import React from "react";
import { FC } from "react";
import { Link as a, Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { SearchInput } from "../../UI/search-input/search-input";
import UserHeaderPanel from "../user-header-panel/user-header-panel";
import styles from './header-style.module.scss';
const logo = require('../../assets/img/svg/main-logo__white.png');

interface iHeader {
	className?: string
  }

const Header:FC<iHeader> = ({className}) => {
	const anus = useAppSelector(state => state.albumSlice);
	console.log(anus.title);
	return (
	<div className={styles.container}>
	  <div className={styles.container__box}>
		<div>
			<img src={logo} alt="logo" className={styles.logo} />
		</div>
		<nav>
			<Link to='/' type='button' className={styles.nav__element}>
				<p className={styles.nav__text}>Главная</p>
			</Link>
			<Link to='/' type='button' className={styles.nav__element}>
				<p className={styles.nav__text}>Рецензии</p>
			</Link>
			<Link to='/' type='button' className={styles.nav__element}>
				<p className={styles.nav__text}>Чарты</p>
			</Link>
		</nav>
		<SearchInput />
		<UserHeaderPanel />
	  </div>
	</div>
	);
  }
  
  export default Header;
  