import {
	GET_USER_DETAIL,
	GET_USER_DETAIL_SUCCESS,
	GET_USER_DETAIL_FAIL,
} from './actions';

const initialState = {
	data: [],
	loading: false,
	error: '',
};

const reducerUser = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_DETAIL: {
			return { ...state, loading: true, error: '' };
		}
		case GET_USER_DETAIL_SUCCESS: {
			return { ...state, data: action.data, loading: false };
		}
		case GET_USER_DETAIL_FAIL: {
			return { ...state, loading: false, error: action.error };
		}
		default:
			return state;
	}
};
export default reducerUser;
