import { combineReducers } from 'redux';
import user from '../components/home/reducer';

const reducer2 = (state = {}, action) => {
	switch (action.type) {
		case 'GET_NEWS':
			return { ...state, loading: true };
		case 'NEWS_RECEIVED':
			return { ...state, news: action.json[0], loading: false };
		//TEST
		case 'GET_LIST_SONG':
			return { ...state, loading: true };
		case 'GET_LIST_SONG_SUCCESS':
			return {
				...state,
				listSong: action.response,
				loading: false,
			};
		//end test
		default:
			return state;
	}
};
const reducer = combineReducers({
	user,
});
export default reducer;
