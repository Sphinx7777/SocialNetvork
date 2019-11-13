import {usersApi} from "../Api/Api";

const SET_NEW_USERS = '/usersReducer///SET_NEW_USERS';
const SET_TOTAL_NUMBERS_OF_USERS = '/usersReducer///SET_TOTAL_NUMBERS_OF_USERS';
const SET_CURRENT_PAGE = '/usersReducer///SET_CURRENT_PAGE';
const SET_NUMBER_USERS_ON_PAGE = '/usersReducer///SET_NUMBER_USERS_ON_PAGE';
const SET_LOAD_USERS = '/usersReducer///SET_LOAD_USERS';

let initialState = {
	users: [],
	totalNumberOfUsers: null,
	currentPage: 1,
	numberUsersOnPage: 5,
	loadedUsers: false
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_NEW_USERS: {
			return {...state, users: action.users}
		}

		case SET_LOAD_USERS: {
			return {...state, loadedUsers: action.status}
		}

		case SET_TOTAL_NUMBERS_OF_USERS: {
			return {...state, totalNumberOfUsers: action.totalCount}
		}

		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.currentPage}
		}

		case SET_NUMBER_USERS_ON_PAGE: {
			return {...state, ...state.numberUsersOnPage = action.numberUsersOnPage}
		}

		default:
			return state;
	}
};

const setNewUsersAC = (users) => ({type: SET_NEW_USERS, users});
const setLoadUsersAC = (status) => ({type: SET_LOAD_USERS, status});
const setTotalNumberOfUsersAC = (totalCount) => (
	{
		type: SET_TOTAL_NUMBERS_OF_USERS, totalCount
	});
const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const SetNumberUsersOnPageAC = (numberUsersOnPage) => (
	{
		type: SET_NUMBER_USERS_ON_PAGE, numberUsersOnPage
	});


export const getNewUsers = (currentPage, numberUsersOnPage) => {
	return async (dispatch) => {
		dispatch(setLoadUsersAC(false));
		dispatch(setCurrentPageAC(currentPage));
		let data = await usersApi.getUsers(currentPage, numberUsersOnPage);
		dispatch(setNewUsersAC(data.items));
		dispatch(setTotalNumberOfUsersAC(data.totalCount));
		dispatch(setLoadUsersAC(true));
	}
};

export const searchUsers = (name) => {
	return async (dispatch) => {
		/*dispatch(setLoadUsersAC(false));*/
		let data = await usersApi.searchUser(name);
		dispatch(setNewUsersAC(data.items));
		/*dispatch(setLoadUsersAC(true));*/
	}
};


export default usersReducer;