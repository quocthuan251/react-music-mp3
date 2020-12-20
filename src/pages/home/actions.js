export const GET_LIST_RECOMMEND = 'HOME/GET_LIST_RECOMMEND';
export const GET_LIST_RECOMMEND_SUCCESS = 'HOME/GET_LIST_RECOMMEND_SUCCESS';
export const GET_LIST_RECOMMEND_FAIL = 'HOME/GET_LIST_RECOMMEND_FAIL';

export const GET_LIST_MIX = 'HOME/GET_LIST_MIX';
export const GET_LIST_MIX_SUCCESS = 'HOME/GET_LIST_MIX_SUCCESS';
export const GET_LIST_MIX_FAIL = 'HOME/GET_LIST_MIX_FAIL';

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
