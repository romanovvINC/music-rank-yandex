import { url } from "inspector";
import { FC } from "react";
import { Link } from "react-router-dom";
import Underline from "../../UI/underline/underline";
import styles from './user-header-panel.module.scss';
const mainBackground = require('../../assets/img/bg/main-bg.png');
const promo = require('../../assets/img/mocks/album-drake.jpg');
const avatarUrl = require('../../assets/img/svg/user-icon-svg__white.png');

interface iUserHeaderPanel {
	className?: string
  }

const UserHeaderPanel:FC<iUserHeaderPanel> = ({className}) => {
	const authStatus: boolean = false;
	const userName = 'Sign In';
	const lenOfUnderline = userName.length * 9;

	return (
		<div className={styles.userHeaderPanel} >
			<div className={styles.userName}>
				<button><p>{userName}</p></button>
				{authStatus ? <Underline color="Red" width={lenOfUnderline} height={3}/> : ''}
			</div>
			<Link to='/'>
				<img src={avatarUrl}></img>
			</Link>
		</div>
	);
}
  
export default UserHeaderPanel;
  