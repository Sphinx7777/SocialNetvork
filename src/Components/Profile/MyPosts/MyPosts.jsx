import React from 'react';
import s from './MyPosts.module.scss';
import MyPostFormRedux from "./MyPostFormRedux";
import {connect} from "react-redux";
import {addNewPost} from "../../Redux/profileReducer";
import photo from './../../../Images/skull2.png';


class MyPosts extends React.Component {
	onSubmit = (formData) => {

/*if(!formData.text)return alert('Write message minimum 3 symbols please..');*/
this.props.addNewPost(formData.text);
		const disableBtnSend = ms => new Promise(resolve => setTimeout(resolve, ms));
		return disableBtnSend(10000).then(() => {
			return true;
		})
	};


	render() {
	return (
		<div className={s.myPostsWrapper}>
			{this.props.userId === this.props.loginId ?
				<div className={s.myPostFormWrapper}>
				<MyPostFormRedux postsUpdate={this.props.postsUpdate} onSubmit={this.onSubmit}/>
				</div> : <></>
			}
			<div className={s.myPosts}>
				{this.props.posts.map((m,index) => {
					return (
						<div key={index} className={s.post}>
							<div className={s.userInfo}>
								<img className={s.userInfoPhoto} src={!this.props.photos.small ? photo : this.props.photos.small} alt=""/>
								<span className={s.userInfoText}>{this.props.fullName}</span>
							</div>
							<div className={s.postText}>
								<label className={s.postTextLabel}>{m.text}</label>
							</div>
						</div>
					)})}
			</div>
		</div>
	)}
}
let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		postsUpdate: state.profilePage.postsUpdate,
	}
};


export default connect(mapStateToProps, {addNewPost})(MyPosts);