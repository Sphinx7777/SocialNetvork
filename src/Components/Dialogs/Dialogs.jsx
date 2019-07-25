import React from 'react';
import s from './Dialogs.module.scss';
import DialogsReduxForm from "./DialogsReduxForm";


export const Dialogs = (props) => {

let	onSubmit = (values)=> {
props.addNewPost(values.newTextDialog);
};

	return (
		<div className={s.dialogsWrapper}>
			<div className={s.dialogs}>
			<div className={s.user}>
				<div className={s.userItem}>
				user
			</div>
				<div className={s.userItem}>
					user
				</div>
				<div className={s.userItem}>
					user
				</div>
				<div className={s.userItem}>
					user
				</div>
			</div>
			<div className={s.messages}>
				<DialogsReduxForm onSubmit={onSubmit} postSend={props.postSend}/>
				<div>
					{props.myPost.map(p=> {
						return( <div key={p.id}>
							{p.post}
						</div>)
					})}
				</div>


			</div>
			<div className={s.answers}>
				{props.userAnswers.map((a,index)=> {
					return( <div key={index}>
						{a.answered}
					</div>)
				})}
			</div>
			</div>
		</div>
	)
};