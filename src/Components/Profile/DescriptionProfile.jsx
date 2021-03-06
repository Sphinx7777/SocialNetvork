import React from 'react';
import s from './Profile.module.scss';
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import {Preloader} from "../Others/Preloader/Preloader";


export const DescriptionProfile = (props) => {

	const {
		loginId,
		userId,
		loadProfile,
		fullName,
		aboutMe,
		lookingForAJobDescription,
		contacts,
		status,
		updateStatus
	} = props;

	if (!loadProfile) return <Preloader/>;

	return (
		<div className={s.description}>
			<div className={s.title}>
				Name :
				<label className={s.desc}>
					{fullName}
				</label>
			</div>
			<div className={s.title}>
				About my :
				<label
					className={s.desc}>
					{!aboutMe
						? `Лень о себе писать`
						: aboutMe}
				</label>
			</div>
			<div className={s.title}>
				LookingForAJob :
				<label
					className={s.desc}>
					{!lookingForAJobDescription
						? `Не знаю`
						: lookingForAJobDescription}
				</label>
			</div>
			<div className={s.title}>
				Contacts :
				<div className={s.contacts}>
					<label className={s.title}>
						Facebook :
						<span className={s.desc}>
							<a style={{
								textDecoration: 'none',
								color: 'blue'
							}}
								 target='_blank'
								 rel='noopener noreferrer'
								 href={contacts.facebook}>
								facebook.com/OnishenkoSerg
							</a>
					</span>
					</label>
					<label className={s.title}>
						VK :
						<span className={s.desc}>
							{contacts.vk}
						</span>
					</label>
					<label className={s.title}>
						My website :
						<span className={s.desc}>
						<a style={{
							textDecoration: 'none',
							color: 'blue'
						}}
							 target='_blank'
							 rel='noopener noreferrer'
							 href={contacts.website}>
							sphinx7777.github.io/SocialNetvork
						</a>
					</span>
					</label>
				</div>
			</div>
			{loginId === userId
				? <ProfileStatusWithHook {...{status, updateStatus}}/>
				: <div className={s.title}>
					Status :
					<label className={s.desc}>
						"{!status
						? `Я лентяй и статус не вбил`
						: status}"
					</label>
				</div>
			}
		</div>
	)
};