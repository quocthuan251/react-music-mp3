import {
	GET_LIST_RECOMMEND,
	GET_LIST_RECOMMEND_SUCCESS,
	GET_LIST_RECOMMEND_FAIL,
	GET_LIST_MIX,
	GET_LIST_MIX_SUCCESS,
	GET_LIST_MIX_FAIL,
} from './actions';
const initialState = {
	data: [],
	loading: false,
	error: '',
	listMix: [],
};

const reducerHome = (state = initialState, action) => {
	switch (action.type) {
		case GET_LIST_RECOMMEND: {
			return { ...state, loading: true, error: '' };
		}
		case GET_LIST_RECOMMEND_SUCCESS: {
			return { ...state, data: action.data, loading: false };
		}
		case GET_LIST_RECOMMEND_FAIL: {
			return { ...state, loading: false, error: action.error };
		}
		//call list mix
		case GET_LIST_MIX: {
			return { ...state, loading: true, error: '' };
		}
		case GET_LIST_MIX_SUCCESS: {
			return { ...state, listMix: action.data, loading: false };
		}
		case GET_LIST_MIX_FAIL: {
			return { ...state, loading: false, error: action.error };
		}
		default:
			return state;
	}
};
export default reducerHome;
