import { fromJS } from 'immutable';

// 1. Define const for reducer
export const HOME_GET_lIST_SONG = 'Home/action/GET_LIST_SONG';
export const HOME_GET_lIST_SONG_SUCCESS = 'Home/action/GET_LIST_SONG_SUCCESS';
export const HOME_GET_lIST_SONG_FAIL = 'Home/action/GET_LIST_FAIL';

// 2. Define function for reducer
const getList = () => {
	return {
		type: HOME_GET_lIST_SONG,
	};
};

const getListSuccess = (payload) => {
	return {
		type: HOME_GET_lIST_SONG_SUCCESS,
		payload,
	};
};

const getListFail = (errorMessage) => {
	return {
		type: HOME_GET_lIST_SONG_FAIL,
		errorMessage,
	};
};
// 3. Export actions
export const actions = {
	getList,
	getListSuccess,
	getListFail,
};
// 4. Export state & function for setting states
const emptyList = fromJS([]);
// const emptyObject = fromJS({})

export const initialState = fromJS({
	isLoading: false,
	listSong: emptyList,
	errorMessage: '',
});
export default function song(state = initialState, action) {
	switch (action.type) {
		case HOME_GET_lIST_SONG:
			return state.set('isLoading', true);

		case HOME_GET_lIST_SONG_SUCCESS: {
			const { payload } = action;
			return state
				.set('listSong', fromJS(payload))
				.set('isLoading', false);
		}
		case HOME_GET_lIST_SONG_FAIL:
			return state
				.set('errorMessage', action.errorMessage)
				.set('isLoading', false);
		default:
			return state;
	}
}

// 5. Functions to map state to props
export const getSongs = ({ song }) => song.get('listSong', emptyList);
