export const GET_LIST_RECOMMEND = 'HOME/GET_LIST_RECOMMEND';
export const GET_LIST_RECOMMEND_SUCCESS = 'HOME/GET_LIST_RECOMMEND_SUCCESS';
export const GET_LIST_RECOMMEND_FAIL = 'HOME/GET_LIST_RECOMMEND_FAIL';

export const GET_LIST_MIX = 'HOME/GET_LIST_MIX';
export const GET_LIST_MIX_SUCCESS = 'HOME/GET_LIST_MIX_SUCCESS';
export const GET_LIST_MIX_FAIL = 'HOME/GET_LIST_MIX_FAIL';

export const GET_PLAYSTREAM = 'HOME/GET_PLAYSTREAM';
export const GET_PLAYSTREAM_SUCCESS = 'HOME/GET_PLAYSTREAM_SUCCESS';
export const GET_PLAYSTREAM_FAIL = 'HOME/GET_PLAYSTREAM_FAIL';
export const GET_RUN_PLAYSTREAM = 'HOME/GET_RUN_PLAYSTREAM';
export const GET_RUN_PLAYSTREAM_SUCCESS = 'HOME/GET_RUN_PLAYSTREAM_SUCCESS';
export const GET_RUN_PLAYSTREAM_FAIL = 'HOME/GET_RUN_PLAYSTREAM_FAIL';
export const getListRecomendSong = () => {
	return {
		type: GET_LIST_RECOMMEND,
	};
};
export const getListMix = () => {
	return {
		type: GET_LIST_MIX,
	};
};
export const addPlayStream = (payload) => {
	return {
		type: GET_PLAYSTREAM,
		payload,
	};
};
export const deletePlayStream = (payload) => {
	return {
		type: GET_PLAYSTREAM,
		payload,
	};
};
export const playStream = () => {
	return {
		type: GET_RUN_PLAYSTREAM,
	};
};
