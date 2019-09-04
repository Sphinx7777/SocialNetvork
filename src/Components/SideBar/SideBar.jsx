import React from 'react';
import s from './SideBar.module.scss';
import {NavLink} from "react-router-dom";

let link = (to, title) => {
	return <NavLink className={s.item} activeClassName={s.activeItem} to={`${to}`}>{title}</NavLink>
};


export const SideBar = (props) => {
	return <div className={s.sideBarWrapper}>
		<div className={s.sideBar}>
			<NavLink className={s.item} activeClassName={s.activeItem} exact to='/'>Main</NavLink>
			{link('/users', 'Users')}
			{link('/profile', 'Profile')}
			{link('/dialogs', 'Dialogs')}
			{link('/news', 'News')}
			{link('/music', 'Music')}
			{link('/login', 'Login')}
			{link('/settings', 'Settings')}
		</div>
	</div>
};