import React from "react";
import { FC } from "react";
import { Link as a, Link } from "react-router-dom";
import { SearchInput } from "../UI/search-input/search-input";
import UserHeaderPanel from "../user-header-panel/user-header-panel";
import styles from './header-style.module.scss';
import Modal from "../modal/modal-container";
import { AppRouteProps } from "../../helpers/const";
const logo = require('../../assets/img/svg/main-logo__white.png');

interface iHeader {
	className?: string
  }

const Header:FC<iHeader> = ({className}) => {
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
      <Link to={AppRouteProps.Releases} type='button' className={styles.nav__element}>
				<p className={styles.nav__text}>Релизы</p>
			</Link>
		</nav>
		<SearchInput />
		<UserHeaderPanel />
	  </div>
	</div>
	);
  }
  
  export default Header;
  