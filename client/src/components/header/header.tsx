import React from "react";
import { FC } from "react";
import { Link as a, Link, useLocation } from "react-router-dom";
import { SearchInput } from "../UI/search-input/search-input";
import UserHeaderPanel from "../user-header-panel/user-header-panel";
import styles from './header-style.module.scss';
import cn from 'classnames';
import { AppRouteProps } from "../../helpers/const";
const logo = require('../../assets/img/svg/main-logo2-white.png');

interface iHeader {
	className?: string
  }

const Header:FC<iHeader> = ({className}) => {
  const location = useLocation();
	return (
	<div className={styles.container}>
	  <div className={styles.container__box}>
		<div>
      <Link to={AppRouteProps.Main}>
        <img src={logo} alt="logo" className={styles.headerLogo} />
      </Link>
		</div>
		<nav>
			<Link to={AppRouteProps.Main}
        type='button'
        className={cn(styles.navElement,
          {[styles.navElementActive]: location.pathname === AppRouteProps.Main})}>
				<p className={styles.nav__text}>Главная</p>
			</Link>
			<Link to='/sdaasd' type='button' className={styles.navElement}>
				<p className={styles.nav__text}>Рецензии</p>
			</Link>
			<Link to='/asdsadsda'
        type='button'
        className={cn(styles.navElement,
          {[styles.navElementActive]: location.pathname === 'aaa'})}>
				<p className={styles.nav__text}>Чарты</p>
			</Link>
      <Link to={AppRouteProps.Releases}
        type='button'
        className={cn(styles.navElement,
          {[styles.navElementActive]: location.pathname === AppRouteProps.Releases})}>
				<p className={styles.nav__text}>Релизы</p>
			</Link>
		</nav>
		<SearchInput classname={styles.searchInput}/>
		<UserHeaderPanel />
	  </div>
	</div>
	);
  }
  
  export default Header;
  